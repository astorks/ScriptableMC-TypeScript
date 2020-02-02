import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import MerchantRecipe from '../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface Merchant {
    getRecipes(): Array<MerchantRecipe>;
    setRecipes(arg0: Array<any>): void;
    getRecipe(arg0: number): MerchantRecipe;
    setRecipe(arg0: number, arg1: MerchantRecipe): void;
    getRecipeCount(): number;
    isTrading(): boolean;
    getTrader(): HumanEntity;
}
export default class Merchant {
    static get $javaClass(): any;
}
