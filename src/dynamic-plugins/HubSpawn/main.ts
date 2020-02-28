import JsPlugin from '../../lib/JsPlugin.js';
import Player from '../../lib/org/bukkit/entity/Player.js';
import Bukkit from '../../lib/org/bukkit/Bukkit.js';
import Location from '../../lib/org/bukkit/Location.js';
import Material from '../../lib/org/bukkit/Material.js';
import BlockBreakEvent from '../../lib/org/bukkit/event/block/BlockBreakEvent.js';
import BlockPlaceEvent from '../../lib/org/bukkit/event/block/BlockPlaceEvent.js';
import PlayerInteractEvent from '../../lib/org/bukkit/event/player/PlayerInteractEvent.js';
import PlayerInteractEntityEvent from '../../lib/org/bukkit/event/player/PlayerInteractEntityEvent.js';
import InventoryInteractEvent from '../../lib/org/bukkit/event/inventory/InventoryInteractEvent.js';
import CraftItemEvent from '../../lib/org/bukkit/event/inventory/CraftItemEvent.js';
import EntityDamageEvent from '../../lib/org/bukkit/event/entity/EntityDamageEvent.js';
import ItemBuilder from '../../lib/com/smc/utils/ItemBuilder.js';
import ChatColor from '../../lib/org/bukkit/ChatColor.js';
import PlayerJoinEvent from '../../lib/org/bukkit/event/player/PlayerJoinEvent.js';
import PlayerTeleportEvent from '../../lib/org/bukkit/event/player/PlayerTeleportEvent.js';
import ElytraCourse from '../ElytraCourse/main.js';
import ByteStreams from '../../lib/com/google/common/io/ByteStreams.js';
import PlayerMoveEvent from '../../lib/org/bukkit/event/player/PlayerMoveEvent.js';
import Enchantment from '../../lib/org/bukkit/enchantments/Enchantment.js';
import NBTItem from '../../lib/com/smc/nbtapi/NBTItem.js';
import EntityDamageEvent$DamageCause from '../../lib/org/bukkit/event/entity/EntityDamageEvent$DamageCause.js';
import EntityType from '../../lib/org/bukkit/entity/EntityType.js';
import Vector from '../../lib/org/bukkit/util/Vector.js';
import PotionEffect from '../../lib/org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../lib/org/bukkit/potion/PotionEffectType.js';
import File from '../../lib/java/io/File.js';
import FileUtils from '../../lib/org/apache/commons/io/FileUtils.js';
import Charset from '../../lib/java/nio/charset/Charset.js';
import Command from '../../lib/org/bukkit/command/Command.js';

declare const __dirname: string;
const mainWorld = Bukkit.getServer().getWorld("world");
const spawnPoint = new Location(mainWorld, 76.5, 98, -1.5, 90, 0);
const playerDataFolder = new File(__dirname + "/player_data");

const DEFAULT_PLAYER_DATA = {
    allowInteraction: true,
    fastSprint: true,
    damageEnabled: false
}

export default class HubSpawn extends JsPlugin {
    private elytraCourse: ElytraCourse;
    private playerDataCache: any = {};

    onLoad() {
        console.log("[" + this.pluginName + "] onLoad()");

        if(!playerDataFolder.exists()) {
            playerDataFolder.mkdirs();
        }
    }

    onEnable() {
        console.log("[" + this.pluginName + "] onEnable()");

        // register outgoing bungee message channel
        this.registerOutgoingPluginChannel('BungeeCord');

        this.registerEvent(PlayerJoinEvent, this.onPlayerJoin);
        this.registerEvent(PlayerTeleportEvent, this.onPlayerTeleport);
        this.registerEvent(BlockBreakEvent, this.onBlockPlaceOrBreak);
        this.registerEvent(BlockPlaceEvent, this.onBlockPlaceOrBreak);
        this.registerEvent(PlayerInteractEvent, this.onPlayerInteract);
        this.registerEvent(PlayerInteractEntityEvent, this.onPlayerInteract);
        this.registerEvent(InventoryInteractEvent, this.onInventoryInteract);
        this.registerEvent(EntityDamageEvent, this.onEntityDamage);
        this.registerEvent(CraftItemEvent, this.onCraftItem);
        this.registerEvent(PlayerMoveEvent, this.onPlayerMove);

        this.elytraCourse = this.getPluginInstance("ElytraCourse");

        let hubCommand = this.newCommand("hub");
        hubCommand.setExecutor(this.onHubCommandExecute.bind(this));
        this.registerCommand(hubCommand);

        let hubDataCommand = this.newCommand("hubdata");
        hubDataCommand.setPermission("hub.data");
        hubDataCommand.setExecutor(this.onHubDataCommandExecute.bind(this));
        this.registerCommand(hubDataCommand);

        let onlinePlayers = this.server.getOnlinePlayers();
        onlinePlayers.forEach(player => {
            if(player.getWorld() == mainWorld) {
                this.setInventoryItems(player);
            }
        })
    }

    onDisable() {
        console.log("[" + this.pluginName + "] onDisable()");
    }

    private onHubCommandExecute(sender: Player, command: Command, label: string, args: Array<string>) {
        if(this.elytraCourse && this.elytraCourse.isPlayerHere(sender)) {
            this.elytraCourse.leave(sender);
        }

        sender.teleport(spawnPoint);

        return false;
    }

    private onHubDataCommandExecute(sender: Player, command: Command, label: string, mainArgs: Array<string>) {
        if(mainArgs.length >= 1) {
            let subCommand = mainArgs[0];

            if(subCommand.toLowerCase() == "get") {
                sender.sendMessage(JSON.stringify(this.readPlayerData(sender)));
                return false;
            }

            if(subCommand.toLowerCase() == "reset") {
                this.writePlayerData(sender, DEFAULT_PLAYER_DATA);
                sender.sendMessage(JSON.stringify(this.readPlayerData(sender)));
                return false;
            }

            if(subCommand.toLowerCase() == "set") {
                let Arrays = globalThis.Java.type("java.util.Arrays");
                let String = globalThis.Java.type("java.lang.String");
                let args: Array<String> = Arrays.copyOfRange(mainArgs, 1, mainArgs.length)
                let rawJson: string = String.join(" ", args);

                try {
                    let newPlayerData = JSON.parse(rawJson);
                    this.writePlayerData(sender, newPlayerData);
                    sender.sendMessage(JSON.stringify(this.readPlayerData(sender)));
                }
                catch {
                    sender.sendMessage(ChatColor.RED + "Failed to parse JSON data.");
                    sender.sendMessage(JSON.stringify(this.readPlayerData(sender)));
                }
                
                return false;
            }

            if(subCommand.toLowerCase() == "update") {
                let Arrays = globalThis.Java.type("java.util.Arrays");
                let String = globalThis.Java.type("java.lang.String");
                let args: Array<String> = Arrays.copyOfRange(mainArgs, 1, mainArgs.length)
                let rawJson: string = String.join(" ", args);

                try {
                    let newPlayerData = JSON.parse(rawJson);
                    this.mergePlayerData(sender, newPlayerData);
                    sender.sendMessage(JSON.stringify(this.readPlayerData(sender)));
                }
                catch {
                    sender.sendMessage(ChatColor.RED + "Failed to parse JSON data.");
                    sender.sendMessage(JSON.stringify(this.readPlayerData(sender)));
                }
                
                return false;
            }
        }

        return true;
    }

    onBlockPlaceOrBreak(listener: any, event: BlockBreakEvent | BlockPlaceEvent) {
        let player = event.getPlayer();

        if(player.getWorld() == mainWorld) {
            event.setCancelled(true);
        }
    }

    onInventoryInteract(listener: any, event: InventoryInteractEvent) {
        let entity = event.getWhoClicked();

        if(entity.getWorld() == mainWorld) {
            event.setCancelled(true);
        }
    }

    onEntityDamage(listener: any, event: EntityDamageEvent) {
        let entity = event.getEntity();

        if(entity.getWorld() == mainWorld) {
            event.setCancelled(true);
            if(entity.getType() == EntityType.PLAYER) {
                let player = entity as Player;

                if(event.getCause() == EntityDamageEvent$DamageCause.PROJECTILE) {
                    if(this.readPlayerData(player).allowInteraction) {
                        player.setVelocity(player.getVelocity().add(new Vector(0, 2, 0)));
                    }
                }
                else if(this.readPlayerData(player).damageEnabled) {
                    event.setCancelled(false);
                }
            }
        }
    }

    onCraftItem(listener: any, event: CraftItemEvent) {
        let entity = event.getWhoClicked();

        if(entity.getWorld() == mainWorld) {
            event.setCancelled(true);
        }
    }

    onPlayerJoin(listener: any, event: PlayerJoinEvent) {
        let player = event.getPlayer();

        if(player.getWorld() == mainWorld) {
            this.setInventoryItems(player);
            player.teleport(spawnPoint);
        }
    }

    onPlayerTeleport(listener: any, event: PlayerTeleportEvent) {
        let player = event.getPlayer();

        if(this.elytraCourse && this.elytraCourse.isPlayerHere(player)) {
            return;
        }

        if(event.getTo().getWorld() == mainWorld) {
            this.setInventoryItems(player);
        }
    }

    onPlayerMove(listener: any, event: PlayerMoveEvent) {
        let player = event.getPlayer();

        if(this.elytraCourse && this.elytraCourse.isPlayerHere(player)) {
            return;
        }

        player.setHealth(20);
        player.setFoodLevel(20);

        if(this.readPlayerData(player).fastSprint && player.isSprinting()) {
            player.addPotionEffect(new PotionEffect(PotionEffectType.SPEED, 100, 1, false, false));
        }

        if(player.getLocation().getBlockY() < 5) {
            player.teleport(spawnPoint);
        }
    }

    onPlayerInteract(listener: any, event: PlayerInteractEvent | PlayerInteractEntityEvent) {
        let player = event.getPlayer();

        if(this.elytraCourse && this.elytraCourse.isPlayerHere(player)) {
            return;
        }

        if(player.getWorld() == mainWorld) {
            event.setCancelled(true);

            let itemInHand = player.getItemInHand();

            if(itemInHand.getType() == Material.DIAMOND) {
                player.teleport(spawnPoint);
            }

            if(itemInHand.getType() == Material.GRASS_BLOCK) {
                this.bungeeConnect(player, "survival");
            }

            if(itemInHand.getType() == Material.REDSTONE_BLOCK && player.hasPermission("bungeecord.server.dev")) {
                this.bungeeConnect(player, "dev");
            }

            if(itemInHand.getType() == Material.PLAYER_HEAD) {
                player.performCommand("pwp menu");
            }

            if(this.elytraCourse && itemInHand.getType() == Material.ELYTRA) {
                player.performCommand("elytra_course");
            }

            if(itemInHand.getType() == Material.SUGAR) {
                if(player.getLocation().getBlockY() < 230) {
                    player.setVelocity(player.getVelocity().add(new Vector(0, 2, 0)));
                }
            }

            if(itemInHand.getType() == Material.BOW && this.readPlayerData(player).allowInteraction) {
                event.setCancelled(false);
            }
        }
    }

    setInventoryItems(player: Player) {
        if(player.getWorld() == mainWorld) {
            let inventory = player.getInventory();

            inventory.clear();

            inventory.setItem(0, new ItemBuilder(Material.DIAMOND).setDisplayName(ChatColor.GREEN + "Hub Spawn").build());
            inventory.setItem(1, new ItemBuilder(Material.GRASS_BLOCK).setDisplayName(ChatColor.GREEN + "Survival Server").build());
            //inventory.setItem(2, new ItemBuilder(Material.PLAYER_HEAD).setDisplayName(ChatColor.RED + "Player Worlds").build());
            if(this.elytraCourse) {
                inventory.setItem(3, new ItemBuilder(Material.ELYTRA).setDisplayName(ChatColor.GREEN + "Elytra Course").build());
            }
            if(player.hasPermission("bungeecord.server.dev")) {
                inventory.setItem(4, new ItemBuilder(Material.REDSTONE_BLOCK).setDisplayName(ChatColor.GREEN + "Developer Server").build());
            }
            inventory.setItem(7, new ItemBuilder(Material.SUGAR).setDisplayName(ChatColor.GREEN + "Jump Boost").build());
            let bowItem = new NBTItem(new ItemBuilder(Material.BOW).addEnchant(Enchantment.ARROW_INFINITE).setDisplayName(ChatColor.GREEN + "Launcher").build());
            bowItem.setBoolean("Unbreakable", true);
            inventory.setItem(8, bowItem.getItem());
            inventory.setItem(9, new ItemBuilder(Material.ARROW).build());
            console.log("Set " + player.getName() + "'s inventory.");
        }
        else {
            console.log("Not setting " + player.getName() + "'s inventory, reason: world:" + player.getWorld().getName() + ".");
        }
    }

    private bungeeConnect(player: Player, server: string): void {
        console.log("[" + this.pluginName + "] Sending " + player.getName() + " to " + server + " server...");
        let connectMessage = ByteStreams.newDataOutput();
        connectMessage.writeUTF("Connect");
        connectMessage.writeUTF(server);
        player.sendPluginMessage(this.context.getJavaPlugin(), "BungeeCord", connectMessage.toByteArray())
    }

    public readPlayerData(player: Player): any {
        return this.readPlayerDataUuid(player.getUniqueId());
    }

    public writePlayerData(player: Player, data: any) {
        this.writePlayerDataUuid(player.getUniqueId(), data);
    }

    public mergePlayerData(player: Player, newData: any) {
        this.mergePlayerDataUuid(player.getUniqueId(), newData);
    }

    public mergePlayerDataUuid(uuid: string, newData: any) {
        let existingData = this.readPlayerDataUuid(uuid);
        let mergedData = {...existingData, ...newData};
        this.writePlayerDataUuid(uuid, mergedData)
    }

    public readPlayerDataUuid(uuid: string): any {
        let dataFile = new File(playerDataFolder, uuid.toString().replace(/-/g, "") + ".json");

        if(this.playerDataCache[uuid]) {
            return this.playerDataCache[uuid];
        }
        else if(dataFile.exists()) {
            try {
                let playerData = JSON.parse(FileUtils.readFileToString(dataFile));
                this.playerDataCache[uuid] = playerData;
                return playerData;
            }
            catch(e) {
                console.error(e);
            }
        }

        return DEFAULT_PLAYER_DATA;
    }

    public writePlayerDataUuid(uuid: string, data: any) {
        this.playerDataCache[uuid] = data;
        let configFile = new File(playerDataFolder, uuid.toString().replace(/-/g, "") + ".json");
        FileUtils.writeStringToFile(configFile, JSON.stringify(data), Charset.defaultCharset());
    }
}