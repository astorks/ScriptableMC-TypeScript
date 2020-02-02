import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface ShapedRecipe extends Recipe, Keyed {
    getGroup(): string;
    setGroup(group: string): void;
    setIngredient(key: string, ingredient: Material, raw: number): ShapedRecipe;
    setIngredient(key: string, ingredient: Material): ShapedRecipe;
    setIngredient(key: string, ingredient: RecipeChoice): ShapedRecipe;
    setIngredient(key: string, ingredient: MaterialData): ShapedRecipe;
    getShape(): Array<string>;
    shape(shape: Array<string>): ShapedRecipe;
    getIngredientMap(): any;
    getChoiceMap(): any;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
}
export default class ShapedRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack);
    constructor(key: NamespacedKey, result: ItemStack);
}
