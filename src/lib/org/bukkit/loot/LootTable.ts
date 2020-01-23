declare var Java: any;
import {LootContext} from '../../../org/bukkit/loot/LootContext.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Keyed} from '../../../org/bukkit/Keyed.js'

export interface LootTable extends Keyed {
	populateLoot(random: any, context: LootContext): any;
	fillInventory(inventory: Inventory, random: any, context: LootContext): void;
	getKey(): NamespacedKey;
}

export class LootTable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootTable');
	}
}

