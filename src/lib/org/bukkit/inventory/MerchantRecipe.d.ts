import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { Recipe } from '../../../org/bukkit/inventory/Recipe.js';
export interface MerchantRecipe extends Recipe {
    getResult(): ItemStack;
    getVillagerExperience(): number;
    setVillagerExperience(villagerExperience: number): void;
    hasExperienceReward(): boolean;
    setExperienceReward(flag: boolean): void;
    setIngredients(ingredients: any): void;
    addIngredient(item: ItemStack): void;
    removeIngredient(index: number): void;
    getIngredients(): any;
    getUses(): number;
    setUses(uses: number): void;
    getMaxUses(): number;
    setMaxUses(maxUses: number): void;
    getPriceMultiplier(): number;
    setPriceMultiplier(priceMultiplier: number): void;
}
export declare class MerchantRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
    constructor(result: ItemStack, maxUses: number);
}
