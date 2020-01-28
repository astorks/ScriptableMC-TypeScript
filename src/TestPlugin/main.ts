import { JsPlugin } from '../JsPlugin.js';
import { ChatColor } from '../lib/org/bukkit/ChatColor.js';
import { CommandSender } from '../lib/org/bukkit/command/CommandSender.js';
import { Command } from '../lib/org/bukkit/command/Command.js';
import { Player } from '../lib/org/bukkit/entity/Player.js';
import { PlayerJoinEvent } from '../lib/org/bukkit/event/player/PlayerJoinEvent.js';
import { InventoryContents } from '../lib/fr/minuskube/inv/content/InventoryContents.js';
import { ItemStack } from '../lib/org/bukkit/inventory/ItemStack.js';
import { Material } from '../lib/org/bukkit/Material.js';
import { Enchantment } from '../lib/org/bukkit/enchantments/Enchantment.js';
import { PlayerInteractEvent } from '../lib/org/bukkit/event/player/PlayerInteractEvent.js';
import { BlockBreakEvent } from '../lib/org/bukkit/event/block/BlockBreakEvent.js';
import { BlockPlaceEvent } from '../lib/org/bukkit/event/block/BlockPlaceEvent.js';
import { EntityDamageEvent } from '../lib/org/bukkit/event/entity/EntityDamageEvent.js';
import { PlayerInteractAtEntityEvent } from '../lib/org/bukkit/event/player/PlayerInteractAtEntityEvent.js';
import { PlayerInteractEntityEvent } from '../lib/org/bukkit/event/player/PlayerInteractEntityEvent.js';
import { ByteStreams } from '../lib/com/google/common/io/ByteStreams.js';
import CONFIG from './config.js'
import { EntityType } from '../lib/org/bukkit/entity/EntityType.js';
import { Firework } from '../lib/org/bukkit/entity/Firework.js';
import { FireworkEffect } from '../lib/org/bukkit/FireworkEffect.js';
import { Color } from '../lib/org/bukkit/Color.js';

export class TestPlugin extends JsPlugin {

    onLoad() {
        if(CONFIG.debug) {
            console.log("[" + this.pluginName + "] onLoad()");
        }
    }

    onEnable() {
        if(CONFIG.debug) {
            console.log("[" + this.pluginName + "] onEnable()");
        }

        // register outgoing bungee message channel
        this.registerOutgoingPluginChannel('BungeeCord');
        // Register incoming bungee message channel
        this.registerIncomingPluginChannel('BungeeCord', this.onBungeeMessageReceived);

        // no-op event handler, this will cancel any event that is registered to it.
        let noop = (l: any, e: any) => e.setCancelled(true);

        // Register PlayerJoinEvent to a local method
        this.registerEvent(PlayerJoinEvent, this.onPlayerJoin);

        // Register a bunch of block break / entity interact events and no-op them
        this.registerEvent(EntityDamageEvent, noop);
        this.registerEvent(BlockBreakEvent, noop);
        this.registerEvent(BlockPlaceEvent, noop);
        this.registerEvent(PlayerInteractEvent, noop);
        this.registerEvent(PlayerInteractAtEntityEvent, noop);
        this.registerEvent(PlayerInteractEntityEvent, noop);

        // Create a new command /hellojs
        let cmd = this.newCommand("hellojs");
        // Set the command executor to a local method.
        // Notice the .bind(this), it is important for the "this" scope to be this plugin.
        // We don't need to worry about this for events since it is handled for us inside the base JsPlugin class but we are interacting with the command directly so it is required.
        cmd.setExecutor(this.onHelloWorldCmdExecute.bind(this));
        // Register the command with the server
        this.registerCommand(cmd);
    }

    onDisable() {
        if(CONFIG.debug) {
            console.log("[" + this.pluginName + "] onDisable()");
        }

        this.unregisterOutgoingPluginChannel('BungeeCord');
        this.unregisterIncomingPluginChannel('BungeeCord');
    }

    onPlayerJoin(listener: any, event: PlayerJoinEvent) {
        let player = event.getPlayer();

        if(CONFIG.fireworkOnJoin.enabled && player.hasPermission(CONFIG.fireworkOnJoin.requiredPermission)) {
            let fw = player.getWorld().spawnEntity(player.getLocation().add(0, 10, 0), EntityType.FIREWORK) as Firework;
            let fwm = fw.getFireworkMeta();
            fwm.setPower(2);
            fwm.addEffect(FireworkEffect.builder().withColor(Color.BLUE).flicker(true).build());
            fw.setFireworkMeta(fwm);
            fw.detonate();
        }

        if(CONFIG.printDebugOnJoin) {
            player.sendMessage(this.setPlaceholders(player, ChatColor.DARK_AQUA.toString() + ChatColor.BOLD.toString() + "UUID: %player_uuid%"));
            player.sendMessage(this.setPlaceholders(player, ChatColor.DARK_AQUA.toString() + "World: %player_world%, Rank: %uperms_rank%"));
            player.sendMessage(ChatColor.GRAY.toString() + JSON.stringify({
                health: player.getHealth(),
                hunger: player.getFoodLevel(),
                position: {
                    x: player.getLocation().getX(),
                    y: player.getLocation().getY(),
                    z: player.getLocation().getZ()
                }
            }));
        }
    }

    onHelloWorldCmdExecute(sender: (CommandSender | Player), command: Command, label: string, args: Array<string>) {
        const SmartInventory = this.context.smartInventory();
        const plugin = this;
        
        let inventory = SmartInventory.builder()
            .id("hellojs")
            .provider(SmartInventory.provider({
                init(player: Player, contents: InventoryContents): void {
                    if(contents) {
                        contents.fillBorders(
                            SmartInventory.clickableItem(
                                SmartInventory.itemBuilder(new ItemStack(Material.LIGHT_GRAY_STAINED_GLASS_PANE))
                                    .setDisplayName(" ")
                                    .setLore([" "])
                                    .build()
                            )
                        )

                        let reloadItemStack = new ItemStack(Material.BARRIER)
                        let reloadItemMeta = reloadItemStack.getItemMeta()
                        reloadItemMeta.setDisplayName(ChatColor.DARK_AQUA + "Hello World")
                        reloadItemStack.setItemMeta(reloadItemMeta)
                        contents.set(1, 1, SmartInventory.clickableItem(
                            SmartInventory.itemBuilder(new ItemStack(Material.GOLD_NUGGET))
                                    .setDisplayName(ChatColor.DARK_AQUA + "Hello World")
                                    .setLore(["Test the hello world command"])
                                    .addEnchant(Enchantment.BINDING_CURSE, 1, true)
                                    .build(),
                            () => {
                                if(player != null) {
                                    plugin.bungeeGetServer(player);
                                    player.sendMessage("Hello from javascript!!!");
                                    inventory.close(player);
                                }
                            }
                        ));

                        contents.set(1, 2, SmartInventory.clickableItem(
                            SmartInventory.itemBuilder(new ItemStack(Material.DIAMOND))
                                    .setDisplayName(ChatColor.GREEN + "Hub Server")
                                    .setLore(["Connect to the hub server"])
                                    .build(),
                            () => {
                                if(player != null) {
                                    plugin.bungeeConnect(player, "hub");
                                    inventory.close(player);
                                }
                            }
                        ));

                        contents.set(1, 3, SmartInventory.clickableItem(
                            SmartInventory.itemBuilder(new ItemStack(Material.BEDROCK))
                                    .setDisplayName("Print Server Name")
                                    .build(),
                            () => {
                                if(player != null) {
                                    player.sendMessage(plugin.setPlaceholders(player, "%server_name%"));
                                    inventory.close(player);
                                }
                            }
                        ));

                        contents.set(1, 4, SmartInventory.clickableItem(
                            SmartInventory.itemBuilder(new ItemStack(Material.FIREWORK_ROCKET))
                                    .setDisplayName("Launch Firework")
                                    .build(),
                            () => {
                                if(player != null) {
                                    let fw = player.getWorld().spawnEntity(player.getLocation().add(0, 10, 0), EntityType.FIREWORK) as Firework;
                                    let fwm = fw.getFireworkMeta();
                                    fwm.setPower(2);
                                    fwm.addEffect(FireworkEffect.builder().withColor(Color.BLUE).flicker(true).build());
                                    fw.setFireworkMeta(fwm);
                                    fw.detonate();
                                }
                            }
                        ));
                    }
                }
            }))
            .size(3, 9)
            .title("Test Menu from Javascript!")
            .closeable(true)
            .build();

        inventory.open(sender as Player);
        return false;
    }

    private onBungeeMessageReceived(channel: string, player: Player, message: number[]) {
        if(channel != "BungeeCord") return;

        let messageReader = ByteStreams.newDataInput(message);
        let subchannel = messageReader.readUTF();

        if(subchannel == "GetServer") {
            let serverName = messageReader.readUTF();
            console.log("RECEIVED BUNGEE MESSAGE, player: " + player.getName() +  ", subchannel: " + subchannel + ", server: " + serverName);
        }
        else {
            console.log("RECEIVED BUNGEE MESSAGE, subchannel: " + subchannel + ", length: " + message.length);
        }
    }

    public bungeeConnect(player: Player, server: string): void {
        console.log("[" + this.pluginName + "] Sending " + player.getName() + " to " + server + " server...");
        let connectMessage = ByteStreams.newDataOutput();
        connectMessage.writeUTF("Connect");
        connectMessage.writeUTF(server);
        player.sendPluginMessage(this.context.getJavaPlugin(), "BungeeCord", connectMessage.toByteArray())
    }

    public bungeeGetServer(player: Player): void {
        let getServerMessage = ByteStreams.newDataOutput();
        getServerMessage.writeUTF("GetServer");
        player.sendPluginMessage(this.context.getJavaPlugin(), "BungeeCord", getServerMessage.toByteArray());
    }
}