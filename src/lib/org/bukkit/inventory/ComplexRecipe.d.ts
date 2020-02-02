import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Recipe from '../../../org/bukkit/inventory/Recipe.js';
export default interface ComplexRecipe extends Recipe, Keyed {
    getResult(): ItemStack;
    getKey(): NamespacedKey;
}
export default class ComplexRecipe {
    static get $javaClass(): any;
}
