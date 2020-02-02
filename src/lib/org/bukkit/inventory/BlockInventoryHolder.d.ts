import Block from '../../../org/bukkit/block/Block.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js';
export default interface BlockInventoryHolder extends InventoryHolder {
    getBlock(): Block;
    getInventory(): Inventory;
}
export default class BlockInventoryHolder {
    static get $javaClass(): any;
}
