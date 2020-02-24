import JsPlugin from '../lib/JsPlugin.js';
import ChatColor from '../lib/org/bukkit/ChatColor.js';
import CommandSender from '../lib/org/bukkit/command/CommandSender.js';
import Command from '../lib/org/bukkit/command/Command.js';
import Player from '../lib/org/bukkit/entity/Player.js';
import PlayerJoinEvent from '../lib/org/bukkit/event/player/PlayerJoinEvent.js';
import InventoryContents from '../lib/fr/minuskube/inv/content/InventoryContents.js';
import ItemStack from '../lib/org/bukkit/inventory/ItemStack.js';
import Material from '../lib/org/bukkit/Material.js';
import Enchantment from '../lib/org/bukkit/enchantments/Enchantment.js';
import PlayerInteractEvent from '../lib/org/bukkit/event/player/PlayerInteractEvent.js';
import BlockBreakEvent from '../lib/org/bukkit/event/block/BlockBreakEvent.js';
import BlockPlaceEvent from '../lib/org/bukkit/event/block/BlockPlaceEvent.js';
import EntityDamageEvent from '../lib/org/bukkit/event/entity/EntityDamageEvent.js';
import PlayerInteractAtEntityEvent from '../lib/org/bukkit/event/player/PlayerInteractAtEntityEvent.js';
import PlayerInteractEntityEvent from '../lib/org/bukkit/event/player/PlayerInteractEntityEvent.js';
import ByteStreams from '../lib/com/google/common/io/ByteStreams.js';
import EntityType from '../lib/org/bukkit/entity/EntityType.js';
import Firework from '../lib/org/bukkit/entity/Firework.js';
import FireworkEffect from '../lib/org/bukkit/FireworkEffect.js';
import Color from '../lib/org/bukkit/Color.js';
import MysqlWrapper from '../lib/com/smc/utils/MysqlWrapper.js';
import CONFIG from './config.js'
import Sound from '../lib/org/bukkit/Sound.js';
import MinecraftVersions from '../lib/com/smc/version/MinecraftVersions.js';
import SmartInventory from '../lib/com/smc/smartinvs/SmartInventory.js';
import ItemBuilder from '../lib/com/smc/utils/ItemBuilder.js';
import SmartInventoryProvider from '../lib/com/smc/smartinvs/SmartInventoryProvider.js';

export default class TestPlugin extends JsPlugin {

    private mysqlConnection: MysqlWrapper;

    onLoad() {
        if(CONFIG.debug) {
            console.log("[" + this.pluginName + "] onLoad()");
            console.log("[" + this.pluginName + "] Minecraft Version:", MinecraftVersions.RUNTIME_VERSION);
        }

        // MySQL example
        if(CONFIG.mysql.enabled) {
            this.mysqlConnection = this.mysqlFromConfig(CONFIG.mysql);
            this.mysqlConnection.openConnectionAsync(this.context.getJavaPlugin(), () => {
                let selectStatement = this.mysqlConnection.prepareStatement("SELECT * FROM Testing WHERE enabled = ?;");
                selectStatement.setBoolean(1, true);
                let result = selectStatement.executeQuery();
                while(result.next()) {
                    console.log(result.getInt("id"), result.getString("title"), result.getString("text"));
                }
                result.close();
                selectStatement.close();
            });
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


        // Register PlayerJoinEvent to a local method
        this.registerEvent(PlayerJoinEvent, this.onPlayerJoin);

        // // no-op event handler, this will cancel any event that is registered to it.
        // let noop = (l: any, e: any) => e.setCancelled(true);
        // // Register a bunch of block break / entity interact events and no-op them
        // this.registerEvent(EntityDamageEvent, noop);
        // this.registerEvent(BlockBreakEvent, noop);
        // this.registerEvent(BlockPlaceEvent, noop);
        // this.registerEvent(PlayerInteractEvent, noop);
        // this.registerEvent(PlayerInteractAtEntityEvent, noop);
        // this.registerEvent(PlayerInteractEntityEvent, noop);

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
        const plugin = this;
        
        let inventory = SmartInventory.builder(this.context.getInventoryManager())
            .id("hellojs")
            .provider(new SmartInventoryProvider({
                init(player: Player, contents: InventoryContents): void {
                    if(contents) {
                        contents.fillBorders(
                            SmartInventory.clickableItem(
                                new ItemBuilder(new ItemStack(Material.BEDROCK))
                                    .setDisplayName(" ")
                                    .setLore([" "])
                                    .build()
                            )
                        );

                        contents.set(1, 1, SmartInventory.clickableItem(
                            new ItemBuilder(new ItemStack(Material.GOLD_NUGGET))
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
                            new ItemBuilder(new ItemStack(Material.DIAMOND))
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
                            new ItemBuilder(new ItemStack(Material.IRON_INGOT))
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
                            new ItemBuilder(new ItemStack(Material.GOLD_INGOT))
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

                        // Sound.ENTITY_LIGHTNING_BOLT_THUNDER only exists in minecraft 1.13+?
                        // Check if runtime version is 1.13+
                        if(MinecraftVersions.RUNTIME_VERSION.isAfterOrEq(MinecraftVersions.v1_13)) {
                            contents.set(1, 5, SmartInventory.clickableItem(
                                new ItemBuilder(new ItemStack(Material.TNT))
                                    .setDisplayName("THUNDER")
                                    .build(),
                                () => {
                                    plugin.server.getOnlinePlayers().forEach((_player: Player) => {
                                        _player.getWorld().playSound(_player.getLocation(), Sound.ENTITY_LIGHTNING_BOLT_THUNDER, 1, 1)
                                    });
                                }
                            ));
                        }
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