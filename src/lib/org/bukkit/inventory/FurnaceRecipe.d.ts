import CookingRecipe from '../../../org/bukkit/inventory/CookingRecipe.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface FurnaceRecipe extends CookingRecipe {
    setInput(input: Material): CookingRecipe;
    setInput(input: Material): FurnaceRecipe;
    setInput(input: Material, data: number): FurnaceRecipe;
    setInput(input: MaterialData): FurnaceRecipe;
    setInputChoice(input: RecipeChoice): FurnaceRecipe;
    setInputChoice(input: RecipeChoice): CookingRecipe;
    getKey(): NamespacedKey;
    getResult(): ItemStack;
    getInput(): ItemStack;
    getInputChoice(): RecipeChoice;
    setExperience(experience: number): void;
    setCookingTime(cookingTime: number): void;
    getGroup(): string;
    getCookingTime(): number;
    getExperience(): number;
    setGroup(group: string): void;
}
export default class FurnaceRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, source: Material, data: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, data: number, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
    constructor(result: ItemStack, source: Material);
    constructor(result: ItemStack, source: MaterialData);
    constructor(result: ItemStack, source: MaterialData, experience: number);
}
