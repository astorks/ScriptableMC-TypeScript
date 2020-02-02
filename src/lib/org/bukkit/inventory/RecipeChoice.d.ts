import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface RecipeChoice {
    getItemStack(): ItemStack;
    clone(): any;
    clone(): RecipeChoice;
    test(arg0: any): boolean;
    test(arg0: ItemStack): boolean;
    negate(): any;
    and(arg0: any): any;
    or(arg0: any): any;
}
export default class RecipeChoice {
    static get $javaClass(): any;
}
