import CookingRecipe from '../../../org/bukkit/inventory/CookingRecipe.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface SmokingRecipe extends CookingRecipe {
    getKey(): NamespacedKey;
    setInput(input: Material): CookingRecipe;
    getResult(): ItemStack;
    getInput(): ItemStack;
    setInputChoice(input: RecipeChoice): CookingRecipe;
    getExperience(): number;
    setGroup(group: string): void;
    getCookingTime(): number;
    setExperience(experience: number): void;
    setCookingTime(cookingTime: number): void;
    getGroup(): string;
    getInputChoice(): RecipeChoice;
}
export default class SmokingRecipe {
    static get $javaClass(): any;
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
}
