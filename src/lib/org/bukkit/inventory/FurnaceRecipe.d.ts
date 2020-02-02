import CookingRecipe from '../../../org/bukkit/inventory/CookingRecipe.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import RecipeChoice from '../../../org/bukkit/inventory/RecipeChoice.js';
export default interface FurnaceRecipe extends CookingRecipe {
    setInput(input: Material, data: number): FurnaceRecipe;
    setInput(input: Material): FurnaceRecipe;
    setInput(input: Material): CookingRecipe;
    setInput(input: MaterialData): FurnaceRecipe;
    setInputChoice(input: RecipeChoice): CookingRecipe;
    setInputChoice(input: RecipeChoice): FurnaceRecipe;
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
export default class FurnaceRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, source: Material);
    constructor(result: ItemStack, source: MaterialData);
    constructor(result: ItemStack, source: MaterialData, experience: number);
    constructor(result: ItemStack, source: Material, data: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, source: Material, data: number, experience: number, cookingTime: number);
    constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
}
