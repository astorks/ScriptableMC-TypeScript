import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface Recipe {
    getResult(): ItemStack;
}
export default class Recipe {
    static get $javaClass(): any;
}
