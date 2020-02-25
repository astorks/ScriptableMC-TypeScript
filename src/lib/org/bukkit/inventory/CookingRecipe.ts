declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import Material from '../../../org/bukkit/Material.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Recipe from '../../../org/bukkit/inventory/Recipe.js'
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js'

export default interface CookingRecipe extends Recipe, Keyed {
	getCookingTime(): number;
	getExperience(): number;
	getGroup(): string;
	getInput(): ItemStack;
	getInputChoice(): RecipeChoice;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
	setCookingTime(cookingTime: number): void;
	setExperience(experience: number): void;
	setGroup(group: string): void;
	setInput(input: Material): CookingRecipe;
	setInputChoice(input: RecipeChoice): CookingRecipe;
}

export default class CookingRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.CookingRecipe');
	}

	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
	constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
	constructor(...args: any[]) {
		return new CookingRecipe.$javaClass(...args);
	}

}

