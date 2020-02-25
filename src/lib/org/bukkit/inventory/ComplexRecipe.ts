declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Recipe from '../../../org/bukkit/inventory/Recipe.js'

export default interface ComplexRecipe extends Recipe, Keyed {
	getKey(): NamespacedKey;
	getResult(): ItemStack;
}

export default class ComplexRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ComplexRecipe');
	}

}

