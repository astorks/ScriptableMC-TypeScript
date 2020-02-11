import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import Material from '../../../org/bukkit/Material.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface StonecuttingRecipe extends Recipe, Keyed {
    getKey(): NamespacedKey;
    setInput(input: Material): StonecuttingRecipe;
    getResult(): ItemStack;
    getInput(): ItemStack;
    setInputChoice(input: RecipeChoice): StonecuttingRecipe;
    getInputChoice(): RecipeChoice;
    getGroup(): string;
    setGroup(group: string): void;
}
export default class StonecuttingRecipe {
    static get $javaClass(): any;
    constructor(key: NamespacedKey, result: ItemStack, source: Material);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice);
}
