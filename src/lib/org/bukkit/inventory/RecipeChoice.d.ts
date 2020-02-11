import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface RecipeChoice {
    clone(): any;
    clone(): RecipeChoice;
    test(arg0: any): boolean;
    test(arg0: ItemStack): boolean;
    getItemStack(): ItemStack;
    negate(): any;
    and(other: any): any;
    or(other: any): any;
}
export default class RecipeChoice {
    static get $javaClass(): any;
}
