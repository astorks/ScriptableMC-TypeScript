import Color from '../../../org/bukkit/Color.js';
import ItemMeta from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
export default interface ItemFactory {
    getItemMeta(arg0: Material): ItemMeta;
    asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta;
    asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta;
    updateMaterial(arg0: ItemMeta, arg1: Material): Material;
    isApplicable(arg0: ItemMeta, arg1: Material): boolean;
    isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean;
    getDefaultLeatherColor(): Color;
}
export default class ItemFactory {
    static get $javaClass(): any;
}
