import { MerchantRecipe } from '../../../org/bukkit/inventory/MerchantRecipe.js';
import { HumanEntity } from '../../../org/bukkit/entity/HumanEntity.js';
export interface Merchant {
    getRecipes(): any;
    setRecipes(arg0: any): void;
    getRecipe(arg0: number): MerchantRecipe;
    setRecipe(arg0: number, arg1: MerchantRecipe): void;
    getRecipeCount(): number;
    isTrading(): boolean;
    getTrader(): HumanEntity;
}
export declare class Merchant {
    static get $javaClass(): any;
}
