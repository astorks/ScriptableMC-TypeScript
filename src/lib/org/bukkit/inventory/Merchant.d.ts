import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import MerchantRecipe from '../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface Merchant {
    isTrading(): boolean;
    getTrader(): HumanEntity;
    getRecipes(): any;
    setRecipes(arg0: any): void;
    getRecipe(arg0: number): MerchantRecipe;
    setRecipe(arg0: number, arg1: MerchantRecipe): void;
    getRecipeCount(): number;
}
export default class Merchant {
    static get $javaClass(): any;
}
