declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Recipe from '../../../org/bukkit/inventory/Recipe.js'

export default interface MerchantRecipe extends Recipe {
	getVillagerExperience(): number;
	setVillagerExperience(villagerExperience: number): void;
	addIngredient(item: ItemStack): void;
	removeIngredient(index: number): void;
	setIngredients(ingredients: Array<any>): void;
	getIngredients(): Array<ItemStack>;
	getUses(): number;
	setUses(uses: number): void;
	getMaxUses(): number;
	setMaxUses(maxUses: number): void;
	hasExperienceReward(): boolean;
	setExperienceReward(flag: boolean): void;
	getPriceMultiplier(): number;
	setPriceMultiplier(priceMultiplier: number): void;
	getResult(): ItemStack;
}

export default class MerchantRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MerchantRecipe');
	}
	constructor(result: ItemStack, maxUses: number);
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
	constructor(...args: any[]) {
		return new MerchantRecipe.$javaClass(...args);
	}
}

