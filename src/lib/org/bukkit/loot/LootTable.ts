declare var Java: any;
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import LootContext from './LootContext.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'

export default interface LootTable extends Keyed {
	fillInventory(arg0: Inventory, arg1: any, arg2: LootContext): void;
	getKey(): NamespacedKey;
	populateLoot(arg0: any, arg1: LootContext): Array<ItemStack>;
}

export default class LootTable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootTable');
	}

}

