declare var Java: any;
import {MerchantRecipe} from '../../../org/bukkit/inventory/MerchantRecipe.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'

export interface Merchant {
	getRecipe(i: number): MerchantRecipe;
	getTrader(): HumanEntity;
	isTrading(): boolean;
	setRecipes(recipes: any): void;
	getRecipes(): any;
	setRecipe(i: number, recipe: MerchantRecipe): void;
	getRecipeCount(): number;
}

export class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
}

