declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import Material from '../../../org/bukkit/Material.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Recipe from '../../../org/bukkit/inventory/Recipe.js'
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js'

export default interface StonecuttingRecipe extends Recipe, Keyed {
	getGroup(): string;
	getInput(): ItemStack;
	getInputChoice(): RecipeChoice;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
	setGroup(group: string): void;
	setInput(input: Material): StonecuttingRecipe;
	setInputChoice(input: RecipeChoice): StonecuttingRecipe;
}

export default class StonecuttingRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.StonecuttingRecipe');
	}

	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice);
	constructor(key: NamespacedKey, result: ItemStack, source: Material);
	constructor(...args: any[]) {
		return new StonecuttingRecipe.$javaClass(...args);
	}

}

