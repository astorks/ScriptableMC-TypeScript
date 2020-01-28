import { LootTable } from '../../../org/bukkit/loot/LootTable.js';
export interface Lootable {
    getLootTable(): LootTable;
    getSeed(): number;
    setLootTable(arg0: LootTable): void;
    setSeed(arg0: number): void;
}
export declare class Lootable {
    static get $javaClass(): any;
}
