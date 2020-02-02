import CookingRecipe from '../../../org/bukkit/inventory/CookingRecipe.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface BlastingRecipe extends CookingRecipe {
    getKey(): NamespacedKey;
    setInput(input: Material): CookingRecipe;
    getResult(): ItemStack;
    setGroup(group: string): void;
    setExperience(experience: number): void;
    getExperience(): number;
    getInputChoice(): RecipeChoice;
    getGroup(): string;
    getCookingTime(): number;
    getInput(): ItemStack;
    setInputChoice(input: RecipeChoice): CookingRecipe;
    setCookingTime(cookingTime: number): void;
}
export default class BlastingRecipe {
    static get $javaClass(): any;
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
}
