declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Recipe} from '../../../org/bukkit/inventory/Recipe.js'

export interface MerchantRecipe extends Recipe {
	getResult(): ItemStack;
	setPriceMultiplier(priceMultiplier: number): void;
	setUses(uses: number): void;
	getIngredients(): any;
	addIngredient(item: ItemStack): void;
	getPriceMultiplier(): number;
	setIngredients(ingredients: any): void;
	getMaxUses(): number;
	getUses(): number;
	removeIngredient(index: number): void;
	setMaxUses(maxUses: number): void;
	getVillagerExperience(): number;
	setVillagerExperience(villagerExperience: number): void;
	setExperienceReward(flag: boolean): void;
	hasExperienceReward(): boolean;
}

export class MerchantRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MerchantRecipe');
	}
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
	constructor(result: ItemStack, maxUses: number);
	constructor(...args: any[]) {
		return new MerchantRecipe.$javaClass(...args);
	}
}

