import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
export default interface MerchantRecipe extends Recipe {
    getResult(): ItemStack;
    setVillagerExperience(villagerExperience: number): void;
    getVillagerExperience(): number;
    setExperienceReward(flag: boolean): void;
    hasExperienceReward(): boolean;
    setIngredients(ingredients: Array<any>): void;
    getPriceMultiplier(): number;
    getMaxUses(): number;
    removeIngredient(index: number): void;
    getIngredients(): Array<ItemStack>;
    getUses(): number;
    addIngredient(item: ItemStack): void;
    setUses(uses: number): void;
    setPriceMultiplier(priceMultiplier: number): void;
    setMaxUses(maxUses: number): void;
}
export default class MerchantRecipe {
    static get $javaClass(): any;
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
    constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
    constructor(result: ItemStack, maxUses: number);
}
