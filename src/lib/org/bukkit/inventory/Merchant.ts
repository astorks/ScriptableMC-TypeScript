declare var Java: any;
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import MerchantRecipe from '../../../org/bukkit/inventory/MerchantRecipe.js'

export default interface Merchant {
	getRecipe(arg0: number): MerchantRecipe;
	setRecipe(arg0: number, arg1: MerchantRecipe): void;
	getRecipes(): Array<MerchantRecipe>;
	setRecipes(arg0: Array<any>): void;
	getRecipeCount(): number;
	isTrading(): boolean;
	getTrader(): HumanEntity;
}

export default class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
}

