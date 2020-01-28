import { Inventory } from '../../../org/bukkit/inventory/Inventory.js';
import { LootContext } from '../../../org/bukkit/loot/LootContext.js';
import { NamespacedKey } from '../../../org/bukkit/NamespacedKey.js';
import { Keyed } from '../../../org/bukkit/Keyed.js';
export interface LootTable extends Keyed {
    fillInventory(arg0: Inventory, arg1: any, arg2: LootContext): void;
    populateLoot(arg0: any, arg1: LootContext): any;
    getKey(): NamespacedKey;
}
export declare class LootTable {
    static get $javaClass(): any;
}
