import { ItemMeta } from '../../../org/bukkit/inventory/meta/ItemMeta.js';
import { Material } from '../../../org/bukkit/Material.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { Color } from '../../../org/bukkit/Color.js';
export interface ItemFactory {
    isApplicable(arg0: ItemMeta, arg1: Material): boolean;
    isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean;
    asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta;
    asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta;
    updateMaterial(arg0: ItemMeta, arg1: Material): Material;
    getItemMeta(arg0: Material): ItemMeta;
    getDefaultLeatherColor(): Color;
}
export declare class ItemFactory {
    static get $javaClass(): any;
}
