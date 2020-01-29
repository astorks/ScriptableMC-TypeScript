import { Material } from '../../org/bukkit/Material.js';
import { BlockData } from '../../org/bukkit/block/data/BlockData.js';
import { MaterialData } from '../../org/bukkit/material/MaterialData.js';
import { PluginDescriptionFile } from '../../org/bukkit/plugin/PluginDescriptionFile.js';
import { NamespacedKey } from '../../org/bukkit/NamespacedKey.js';
import { Advancement } from '../../org/bukkit/advancement/Advancement.js';
import { ItemStack } from '../../org/bukkit/inventory/ItemStack.js';
export interface UnsafeValues {
    getMaterial(arg0: string, arg1: number): Material;
    fromLegacy(arg0: Material, arg1: number): BlockData;
    fromLegacy(arg0: MaterialData): Material;
    fromLegacy(arg0: Material): Material;
    fromLegacy(arg0: MaterialData, arg1: boolean): Material;
    getDataVersion(): number;
    toLegacy(arg0: Material): Material;
    processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
    removeAdvancement(arg0: NamespacedKey): boolean;
    checkSupported(arg0: PluginDescriptionFile): void;
    loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
    modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
}
export declare class UnsafeValues {
    static get $javaClass(): any;
}
