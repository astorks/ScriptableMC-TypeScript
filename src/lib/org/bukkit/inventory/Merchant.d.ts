import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import MerchantRecipe from '../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface Merchant {
    setRecipes(arg0: Array<any>): void;
    getTrader(): HumanEntity;
    getRecipes(): Array<MerchantRecipe>;
    getRecipe(arg0: number): MerchantRecipe;
    setRecipe(arg0: number, arg1: MerchantRecipe): void;
    isTrading(): boolean;
    getRecipeCount(): number;
}
export default class Merchant {
    static get $javaClass(): any;
}
