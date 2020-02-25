declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Recipe from '../../../org/bukkit/inventory/Recipe.js'
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js'

export default interface ShapelessRecipe extends Recipe, Keyed {
	addIngredient(ingredient: Material): ShapelessRecipe;
	addIngredient(ingredient: MaterialData): ShapelessRecipe;
	addIngredient(ingredient: RecipeChoice): ShapelessRecipe;
	addIngredient(count: number, ingredient: MaterialData): ShapelessRecipe;
	addIngredient(ingredient: Material, rawdata: number): ShapelessRecipe;
	addIngredient(count: number, ingredient: Material): ShapelessRecipe;
	addIngredient(count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
	getChoiceList(): Array<RecipeChoice>;
	getGroup(): string;
	getIngredientList(): Array<ItemStack>;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
	removeIngredient(ingredient: MaterialData): ShapelessRecipe;
	removeIngredient(ingredient: RecipeChoice): ShapelessRecipe;
	removeIngredient(ingredient: Material): ShapelessRecipe;
	removeIngredient(count: number, ingredient: MaterialData): ShapelessRecipe;
	removeIngredient(ingredient: Material, rawdata: number): ShapelessRecipe;
	removeIngredient(count: number, ingredient: Material): ShapelessRecipe;
	removeIngredient(count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
	setGroup(group: string): void;
}

export default class ShapelessRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ShapelessRecipe');
	}

	constructor(result: ItemStack);
	constructor(key: NamespacedKey, result: ItemStack);
	constructor(...args: any[]) {
		return new ShapelessRecipe.$javaClass(...args);
	}

}

