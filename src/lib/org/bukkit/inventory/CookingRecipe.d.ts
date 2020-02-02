import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import Material from '../../../org/bukkit/Material.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface CookingRecipe extends Recipe, Keyed {
    setInput(input: Material): CookingRecipe;
    setInputChoice(input: RecipeChoice): CookingRecipe;
    getInputChoice(): RecipeChoice;
    getInput(): ItemStack;
    setExperience(experience: number): void;
    getExperience(): number;
    setCookingTime(cookingTime: number): void;
    getCookingTime(): number;
    getGroup(): string;
    setGroup(group: string): void;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
}
export default class CookingRecipe {
    static get $javaClass(): any;
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
}
