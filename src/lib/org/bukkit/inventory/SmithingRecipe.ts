declare var Java: any;
import ItemStack from './ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Recipe from './Recipe.js'
import RecipeChoice from './RecipeChoice.js'

export default interface SmithingRecipe extends Recipe, Keyed {
	getAddition(): RecipeChoice;
	getBase(): RecipeChoice;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
}

export default class SmithingRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.SmithingRecipe');
	}

	constructor(key: NamespacedKey, result: ItemStack, base: RecipeChoice, addition: RecipeChoice);
	constructor(...args: any[]) {
		return new SmithingRecipe.$javaClass(...args);
	}

}

