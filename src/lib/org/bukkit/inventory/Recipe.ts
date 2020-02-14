declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'

export default interface Recipe {
	getResult(): ItemStack;
}

export default class Recipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Recipe');
	}

}

