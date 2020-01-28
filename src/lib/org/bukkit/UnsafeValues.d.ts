import { Material } from '../../org/bukkit/Material.js';
import { MaterialData } from '../../org/bukkit/material/MaterialData.js';
import { BlockData } from '../../org/bukkit/block/data/BlockData.js';
import { ItemStack } from '../../org/bukkit/inventory/ItemStack.js';
import { PluginDescriptionFile } from '../../org/bukkit/plugin/PluginDescriptionFile.js';
import { Advancement } from '../../org/bukkit/advancement/Advancement.js';
import { NamespacedKey } from '../../org/bukkit/NamespacedKey.js';
export interface UnsafeValues {
    getDataVersion(): number;
    getMaterial(arg0: string, arg1: number): Material;
    toLegacy(arg0: Material): Material;
    fromLegacy(arg0: Material): Material;
    fromLegacy(arg0: MaterialData): Material;
    fromLegacy(arg0: Material, arg1: number): BlockData;
    fromLegacy(arg0: MaterialData, arg1: boolean): Material;
    modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
    checkSupported(arg0: PluginDescriptionFile): void;
    processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
    loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
    removeAdvancement(arg0: NamespacedKey): boolean;
}
export declare class UnsafeValues {
    static get $javaClass(): any;
}
