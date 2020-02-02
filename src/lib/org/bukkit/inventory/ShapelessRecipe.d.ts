import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface ShapelessRecipe extends Recipe, Keyed {
    addIngredient(ingredient: Material, rawdata: number): ShapelessRecipe;
    addIngredient(count: number, ingredient: MaterialData): ShapelessRecipe;
    addIngredient(count: number, ingredient: Material): ShapelessRecipe;
    addIngredient(ingredient: RecipeChoice): ShapelessRecipe;
    addIngredient(count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
    addIngredient(ingredient: MaterialData): ShapelessRecipe;
    addIngredient(ingredient: Material): ShapelessRecipe;
    removeIngredient(count: number, ingredient: Material): ShapelessRecipe;
    removeIngredient(count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
    removeIngredient(count: number, ingredient: MaterialData): ShapelessRecipe;
    removeIngredient(ingredient: Material, rawdata: number): ShapelessRecipe;
    removeIngredient(ingredient: MaterialData): ShapelessRecipe;
    removeIngredient(ingredient: RecipeChoice): ShapelessRecipe;
    removeIngredient(ingredient: Material): ShapelessRecipe;
    getGroup(): string;
    setGroup(group: string): void;
    getIngredientList(): Array<ItemStack>;
    getChoiceList(): Array<RecipeChoice>;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
}
export default class ShapelessRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack);
    constructor(key: NamespacedKey, result: ItemStack);
}
