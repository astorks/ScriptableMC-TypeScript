import Inventory from '../../../org/bukkit/inventory/Inventory.js';
export default interface InventoryHolder {
    getInventory(): Inventory;
}
export default class InventoryHolder {
    static get $javaClass(): any;
}
