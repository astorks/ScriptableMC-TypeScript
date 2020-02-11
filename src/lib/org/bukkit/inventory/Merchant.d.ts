import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import MerchantRecipe from '../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface Merchant {
    isTrading(): boolean;
    getRecipe(arg0: number): MerchantRecipe;
    setRecipe(arg0: number, arg1: MerchantRecipe): void;
    getRecipes(): Array<MerchantRecipe>;
    getTrader(): HumanEntity;
    getRecipeCount(): number;
    setRecipes(arg0: Array<any>): void;
}
export default class Merchant {
    static get $javaClass(): any;
}
