import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
export default interface MerchantRecipe extends Recipe {
    getResult(): ItemStack;
    hasExperienceReward(): boolean;
    setExperienceReward(flag: boolean): void;
    setVillagerExperience(villagerExperience: number): void;
    getVillagerExperience(): number;
    setIngredients(ingredients: Array<any>): void;
    addIngredient(item: ItemStack): void;
    setUses(uses: number): void;
    getMaxUses(): number;
    removeIngredient(index: number): void;
    getPriceMultiplier(): number;
    setPriceMultiplier(priceMultiplier: number): void;
    getIngredients(): Array<ItemStack>;
    getUses(): number;
    setMaxUses(maxUses: number): void;
}
export default class MerchantRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
    constructor(result: ItemStack, maxUses: number);
}
