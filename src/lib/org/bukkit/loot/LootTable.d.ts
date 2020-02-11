import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import LootContext from '../../../org/bukkit/loot/LootContext.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
export default interface LootTable extends Keyed {
    populateLoot(arg0: any, arg1: LootContext): any;
    fillInventory(arg0: Inventory, arg1: any, arg2: LootContext): void;
    getKey(): NamespacedKey;
}
export default class LootTable {
    static get $javaClass(): any;
}
