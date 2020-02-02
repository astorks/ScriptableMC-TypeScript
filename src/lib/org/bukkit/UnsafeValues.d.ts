import Advancement from '../../org/bukkit/advancement/Advancement.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import ItemStack from '../../org/bukkit/inventory/ItemStack.js';
import Material from '../../org/bukkit/Material.js';
import MaterialData from '../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../org/bukkit/NamespacedKey.js';
import PluginDescriptionFile from '../../org/bukkit/plugin/PluginDescriptionFile.js';
export default interface UnsafeValues {
    toLegacy(arg0: Material): Material;
    fromLegacy(arg0: Material, arg1: number): BlockData;
    fromLegacy(arg0: MaterialData, arg1: boolean): Material;
    fromLegacy(arg0: MaterialData): Material;
    fromLegacy(arg0: Material): Material;
    getDataVersion(): number;
    getMaterial(arg0: string, arg1: number): Material;
    removeAdvancement(arg0: NamespacedKey): boolean;
    processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
    loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
    checkSupported(arg0: PluginDescriptionFile): void;
    modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
}
export default class UnsafeValues {
    static get $javaClass(): any;
}
