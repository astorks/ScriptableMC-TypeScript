import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface ShapelessRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    removeIngredient(ingredient: Material): ShapelessRecipe;
    removeIngredient(ingredient: MaterialData): ShapelessRecipe;
    removeIngredient(count: number, ingredient: Material): ShapelessRecipe;
    removeIngredient(count: number, ingredient: MaterialData): ShapelessRecipe;
    removeIngredient(ingredient: Material, rawdata: number): ShapelessRecipe;
    removeIngredient(count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
    removeIngredient(ingredient: RecipeChoice): ShapelessRecipe;
    addIngredient(count: number, ingredient: MaterialData): ShapelessRecipe;
    addIngredient(ingredient: Material, rawdata: number): ShapelessRecipe;
    addIngredient(ingredient: Material): ShapelessRecipe;
    addIngredient(ingredient: MaterialData): ShapelessRecipe;
    addIngredient(ingredient: RecipeChoice): ShapelessRecipe;
    addIngredient(count: number, ingredient: Material, rawdata: number): ShapelessRecipe;
    addIngredient(count: number, ingredient: Material): ShapelessRecipe;
    getIngredientList(): any;
    getChoiceList(): any;
    setGroup(group: string): void;
    getGroup(): string;
}
export default class ShapelessRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack);
    constructor(key: NamespacedKey, result: ItemStack);
}
