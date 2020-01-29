import { MerchantRecipe } from '../../../org/bukkit/inventory/MerchantRecipe.js';
import { HumanEntity } from '../../../org/bukkit/entity/HumanEntity.js';
export interface Merchant {
    getRecipe(arg0: number): MerchantRecipe;
    setRecipe(arg0: number, arg1: MerchantRecipe): void;
    getRecipeCount(): number;
    getRecipes(): any;
    getTrader(): HumanEntity;
    setRecipes(arg0: any): void;
    isTrading(): boolean;
}
export declare class Merchant {
    static get $javaClass(): any;
}
