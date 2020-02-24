import JsPlugin from '../../lib/JsPlugin.js';
import Player from '../../lib/org/bukkit/entity/Player.js';
import Command from '../../lib/org/bukkit/command/Command.js';
import PlayerQuitEvent from '../../lib/org/bukkit/event/player/PlayerQuitEvent.js';
import Bukkit from '../../lib/org/bukkit/Bukkit.js';
import Location from '../../lib/org/bukkit/Location.js';
import ItemStack from '../../lib/org/bukkit/inventory/ItemStack.js';
import Material from '../../lib/org/bukkit/Material.js';
import PlayerMoveEvent from '../../lib/org/bukkit/event/player/PlayerMoveEvent.js';
import BlockBreakEvent from '../../lib/org/bukkit/event/block/BlockBreakEvent.js';
import BlockPlaceEvent from '../../lib/org/bukkit/event/block/BlockPlaceEvent.js';
import PlayerInteractEvent from '../../lib/org/bukkit/event/player/PlayerInteractEvent.js';
import PlayerInteractAtEntityEvent from '../../lib/org/bukkit/event/player/PlayerInteractAtEntityEvent.js';
import PlayerInteractEntityEvent from '../../lib/org/bukkit/event/player/PlayerInteractEntityEvent.js';
import InventoryInteractEvent from '../../lib/org/bukkit/event/inventory/InventoryInteractEvent.js';
import CraftItemEvent from '../../lib/org/bukkit/event/inventory/CraftItemEvent.js';
import EntityDamageByEntityEvent from '../../lib/org/bukkit/event/entity/EntityDamageByEntityEvent.js';
import EntityDamageEvent from '../../lib/org/bukkit/event/entity/EntityDamageEvent.js';

const mainWorld = Bukkit.getServer().getWorld("world");
const spawnPoint = new Location(mainWorld, 360, 226, -220);

export default class ElytraMinigame extends JsPlugin {
    private players: {} = {};
    private savedInventories: {} = {};
    private savedLocations: {} = {};

    onLoad() {
        console.log("[" + this.pluginName + "] onLoad()");
    }

    onEnable() {
        console.log("[" + this.pluginName + "] onEnable()");

        this.registerEvent(PlayerQuitEvent, this.onPlayerQuit);
        this.registerEvent(PlayerMoveEvent, this.onPlayerMove);
        this.registerEvent(BlockBreakEvent, this.onBlockBreak);
        this.registerEvent(BlockPlaceEvent, this.onBlockPlace);
        this.registerEvent(PlayerInteractEvent, this.onPlayerInteract);
        this.registerEvent(PlayerInteractAtEntityEvent, this.onPlayerInteract);
        this.registerEvent(PlayerInteractEntityEvent, this.onPlayerInteract);
        this.registerEvent(InventoryInteractEvent, this.onInventoryInteract)
        this.registerEvent(EntityDamageEvent, this.onEntityDamage)
        this.registerEvent(CraftItemEvent, this.onCraftItem)

        let command = this.newCommand("elytraminigame");
        command.setExecutor(this.onCmdExecute.bind(this));
        this.registerCommand(command);
    }

    onDisable() {
        console.log("[" + this.pluginName + "] onDisable()");

        for(let uid in this.players) {
            this.leaveUid(uid);
        }
    }

    onPlayerQuit(listener: any, event: PlayerQuitEvent) {
        let player = event.getPlayer();

        if(this.isPlayerHere(player)) {
            this.leave(player);
        }
    }

    onPlayerMove(listener: any, event: PlayerMoveEvent) {
        let player = event.getPlayer();

        if(this.isPlayerHere(player)) {
            player.getInventory().setItem(38, new ItemStack(Material.ELYTRA));
            player.setHealth(20);
            player.setFoodLevel(20);
        }
    }

    onBlockBreak(listener: any, event: BlockBreakEvent) {
        let player = event.getPlayer();

        if(this.isPlayerHere(player)) {
            event.setCancelled(true);
        }
    }

    onBlockPlace(listener: any, event: BlockPlaceEvent) {
        let player = event.getPlayer();

        if(this.isPlayerHere(player)) {
            event.setCancelled(true);
        }
    }

    onPlayerInteract(listener: any, event: (PlayerInteractEvent | PlayerInteractAtEntityEvent | PlayerInteractEntityEvent)) {
        let player = event.getPlayer();

        if(this.isPlayerHere(player)) {
            event.setCancelled(true);
        }
    }

    onInventoryInteract(listener: any, event: InventoryInteractEvent) {
        let player = event.getWhoClicked()

        if(this.isPlayerUidHere(player.getUniqueId())) {
            event.setCancelled(true);
        }
    }

    onCraftItem(listener: any, event: CraftItemEvent) {
        let player = event.getWhoClicked();

        if(this.isPlayerUidHere(player.getUniqueId())) {
            event.setCancelled(true);
        }
    }

    onEntityDamage(listener: any, event: EntityDamageEvent) {
        let entity = event.getEntity()

        if(this.isPlayerUidHere(entity.getUniqueId())) {
            event.setCancelled(true);
        }
    }

    onCmdExecute(sender: Player, command: Command, label: string, args: Array<string>) {
        if(this.isPlayerHere(sender)) {
            let result = this.leave(sender);
            sender.sendMessage("Left elytra minigame: " + result.toString());
        }
        else {
            let result = this.join(sender);
            sender.sendMessage("Joined elytra minigame: " + result.toString());
        }

        return false;
    }

    public join(player: Player): boolean {
        if(this.isPlayerHere(player)) {
            return false;
        }

        this.players[player.getUniqueId()] = player;
        this.savedInventories[player.getUniqueId()] = player.getInventory().getContents();
        player.getInventory().clear();
        this.savedLocations[player.getUniqueId()] = player.getLocation();
        player.getInventory().setItem(38, new ItemStack(Material.ELYTRA));
        player.teleport(spawnPoint);
        return true;
    }

    public leave(player: Player): boolean {
        return this.leaveUid(player.getUniqueId());
    }

    public leaveUid(uid: string): boolean {
        if(!this.isPlayerUidHere(uid)) {
            return false;
        }

        let player = this.players[uid];
        player.getInventory().setContents(this.savedInventories[uid]);
        player.teleport(this.savedLocations[uid]);
        delete this.players[uid];
        delete this.savedInventories[uid];
        delete this.savedLocations[uid];
        return true;
    }

    public isPlayerHere(player: Player): boolean {
        return this.isPlayerUidHere(player.getUniqueId());
    }

    public isPlayerUidHere(uid: string): boolean {
        return this.players[uid];
    }
}