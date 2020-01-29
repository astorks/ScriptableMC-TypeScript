import { LootTable } from '../../../org/bukkit/loot/LootTable.js';
export interface Lootable {
    getLootTable(): LootTable;
    getSeed(): number;
    setSeed(arg0: number): void;
    setLootTable(arg0: LootTable): void;
}
export declare class Lootable {
    static get $javaClass(): any;
}
