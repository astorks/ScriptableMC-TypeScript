declare var Java: any;
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'

export interface Lootable {
	getLootTable(): LootTable;
	getSeed(): number;
	setSeed(seed: number): void;
	setLootTable(table: LootTable): void;
}

export class Lootable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.Lootable');
	}
}

