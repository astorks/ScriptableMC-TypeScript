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

export class TestPlugin extends JsPlugin {

    onEnable() {
        console.log("[" + this.pluginName + "] onEnable()");

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

    onPlayerJoin(listener: any, event: PlayerJoinEvent) {
        let player = event.getPlayer();

        player.sendMessage(ChatColor.DARK_AQUA.toString() + ChatColor.BOLD.toString() + "UUID: " + player.getUniqueId());
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

    onHelloWorldCmdExecute(sender: (CommandSender | Player), command: Command, label: string, args: Array<string>) {
        const SmartInventory = this.context.smartInventory();
        
        let inventory = SmartInventory.builder()
            .id("hellojs")
            .provider(SmartInventory.provider({
                onInit(player: Player, contents: InventoryContents): void {
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
                                    player.sendMessage("Hello from javascript!!!");
                                    inventory.close(sender as Player);
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
}