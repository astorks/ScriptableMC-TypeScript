declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Recipe} from '../../../org/bukkit/inventory/Recipe.js'

export interface MerchantRecipe extends Recipe {
	getResult(): ItemStack;
	getVillagerExperience(): number;
	setVillagerExperience(villagerExperience: number): void;
	hasExperienceReward(): boolean;
	setExperienceReward(flag: boolean): void;
	getIngredients(): any;
	getPriceMultiplier(): number;
	setUses(uses: number): void;
	getMaxUses(): number;
	getUses(): number;
	setPriceMultiplier(priceMultiplier: number): void;
	setMaxUses(maxUses: number): void;
	addIngredient(item: ItemStack): void;
	removeIngredient(index: number): void;
	setIngredients(ingredients: any): void;
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

