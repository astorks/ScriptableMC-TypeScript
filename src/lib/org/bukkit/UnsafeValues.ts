declare var Java: any;
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {PluginDescriptionFile} from '../../org/bukkit/plugin/PluginDescriptionFile.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'

export interface UnsafeValues {
	fromLegacy(arg0: Material, arg1: number): BlockData;
	fromLegacy(arg0: MaterialData): Material;
	fromLegacy(arg0: Material): Material;
	fromLegacy(arg0: MaterialData, arg1: boolean): Material;
	toLegacy(arg0: Material): Material;
	getDataVersion(): number;
	getMaterial(arg0: string, arg1: number): Material;
	removeAdvancement(arg0: NamespacedKey): boolean;
	checkSupported(arg0: PluginDescriptionFile): void;
	modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
	processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
	loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
}

export class UnsafeValues {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UnsafeValues');
	}
}

