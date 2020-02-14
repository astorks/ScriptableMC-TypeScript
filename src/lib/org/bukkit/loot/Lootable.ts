declare var Java: any;
import LootTable from '../../../org/bukkit/loot/LootTable.js'

export default interface Lootable {
	setSeed(arg0: number): void;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(arg0: LootTable): void;
}

export default class Lootable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.Lootable');
	}
}

