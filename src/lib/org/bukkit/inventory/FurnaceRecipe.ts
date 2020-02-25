declare var Java: any;
import CookingRecipe from '../../../org/bukkit/inventory/CookingRecipe.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js'

export default interface FurnaceRecipe extends CookingRecipe {
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
	setInput(input: Material): FurnaceRecipe;
	setInput(input: MaterialData): FurnaceRecipe;
	setInput(input: Material, data: number): FurnaceRecipe;
	setInputChoice(input: RecipeChoice): FurnaceRecipe;
	setInputChoice(input: RecipeChoice): CookingRecipe;
}

export default class FurnaceRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.FurnaceRecipe');
	}

	constructor(result: ItemStack, source: Material);
	constructor(result: ItemStack, source: MaterialData);
	constructor(result: ItemStack, source: MaterialData, experience: number);
	constructor(result: ItemStack, source: Material, data: number);
	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
	constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
	constructor(key: NamespacedKey, result: ItemStack, source: Material, data: number, experience: number, cookingTime: number);
	constructor(...args: any[]) {
		return new FurnaceRecipe.$javaClass(...args);
	}

}

