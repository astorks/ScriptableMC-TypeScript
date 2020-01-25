declare var Java: any;
import {MerchantRecipe} from '../../../org/bukkit/inventory/MerchantRecipe.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'

export interface Merchant {
	getRecipe(arg0: number): MerchantRecipe;
	setRecipe(arg0: number, arg1: MerchantRecipe): void;
	getRecipes(): any;
	setRecipes(arg0: any): void;
	getRecipeCount(): number;
	isTrading(): boolean;
	getTrader(): HumanEntity;
}

export class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
}

