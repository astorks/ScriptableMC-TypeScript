import LootTable from '../../../org/bukkit/loot/LootTable.js';
export default interface Lootable {
    getSeed(): number;
    getLootTable(): LootTable;
    setSeed(arg0: number): void;
    setLootTable(arg0: LootTable): void;
}
export default class Lootable {
    static get $javaClass(): any;
}
