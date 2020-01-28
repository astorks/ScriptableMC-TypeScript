import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
export interface Recipe {
    getResult(): ItemStack;
}
export declare class Recipe {
    static get $javaClass(): any;
}
