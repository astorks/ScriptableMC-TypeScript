declare var Java: any;
import ItemStack from './ItemStack.js'

export default interface Recipe {
	getResult(): ItemStack;
}

export default class Recipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Recipe');
	}

}

