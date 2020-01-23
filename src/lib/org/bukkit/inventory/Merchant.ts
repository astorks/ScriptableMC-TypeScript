declare var Java: any;
import {MerchantRecipe} from '../../../org/bukkit/inventory/MerchantRecipe.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'

export interface Merchant {
	getRecipes(): any;
	getRecipe(i: number): MerchantRecipe;
	getTrader(): HumanEntity;
	getRecipeCount(): number;
	isTrading(): boolean;
	setRecipes(recipes: any): void;
	setRecipe(i: number, recipe: MerchantRecipe): void;
}

export class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
}

