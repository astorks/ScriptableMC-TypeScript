import Advancement from '../../org/bukkit/advancement/Advancement.js';
import BlockData from '../../org/bukkit/block/data/BlockData.js';
import ItemStack from '../../org/bukkit/inventory/ItemStack.js';
import Material from '../../org/bukkit/Material.js';
import MaterialData from '../../org/bukkit/material/MaterialData.js';
import NamespacedKey from '../../org/bukkit/NamespacedKey.js';
import PluginDescriptionFile from '../../org/bukkit/plugin/PluginDescriptionFile.js';
export default interface UnsafeValues {
    fromLegacy(arg0: MaterialData, arg1: boolean): Material;
    fromLegacy(arg0: MaterialData): Material;
    fromLegacy(arg0: Material): Material;
    fromLegacy(arg0: Material, arg1: number): BlockData;
    modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
    loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
    processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
    getDataVersion(): number;
    removeAdvancement(arg0: NamespacedKey): boolean;
    getMaterial(arg0: string, arg1: number): Material;
    toLegacy(arg0: Material): Material;
    checkSupported(arg0: PluginDescriptionFile): void;
}
export default class UnsafeValues {
    static get $javaClass(): any;
}
