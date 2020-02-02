import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryContents from '../../../../fr/minuskube/inv/content/InventoryContents.js';
import InventoryType from '../../../../org/bukkit/event/inventory/InventoryType.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import SmartInventory from '../../../../fr/minuskube/inv/SmartInventory.js';
export default interface InventoryOpener {
    fill(handle: Inventory, contents: InventoryContents): void;
    open(arg0: SmartInventory, arg1: Player): Inventory;
    supports(arg0: InventoryType): boolean;
}
export default class InventoryOpener {
    static get $javaClass(): any;
}
