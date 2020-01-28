import { Inventory } from '../../../org/bukkit/inventory/Inventory.js';
export interface InventoryHolder {
    getInventory(): Inventory;
}
export declare class InventoryHolder {
    static get $javaClass(): any;
}
