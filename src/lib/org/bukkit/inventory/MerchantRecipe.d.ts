import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
export default interface MerchantRecipe extends Recipe {
    getResult(): ItemStack;
    getVillagerExperience(): number;
    setVillagerExperience(villagerExperience: number): void;
    removeIngredient(index: number): void;
    setUses(uses: number): void;
    addIngredient(item: ItemStack): void;
    setMaxUses(maxUses: number): void;
    getUses(): number;
    getIngredients(): any;
    setPriceMultiplier(priceMultiplier: number): void;
    getPriceMultiplier(): number;
    setIngredients(ingredients: any): void;
    getMaxUses(): number;
    setExperienceReward(flag: boolean): void;
    hasExperienceReward(): boolean;
}
export default class MerchantRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
    constructor(result: ItemStack, maxUses: number);
}
