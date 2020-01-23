declare var Java: any;
import {Material} from '../../org/bukkit/Material.js'
import {PluginDescriptionFile} from '../../org/bukkit/plugin/PluginDescriptionFile.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'

export interface UnsafeValues {
	toLegacy(material: Material): Material;
	checkSupported(pdf: PluginDescriptionFile): void;
	processClass(pdf: PluginDescriptionFile, path: string, clazz: Array<number>): Array<number>;
	modifyItemStack(stack: ItemStack, _arguments: string): ItemStack;
	getMaterial(material: string, version: number): Material;
	getDataVersion(): number;
	fromLegacy(material: Material): Material;
	fromLegacy(material: MaterialData): Material;
	fromLegacy(material: MaterialData, itemPriority: boolean): Material;
	fromLegacy(material: Material, data: number): BlockData;
	removeAdvancement(key: NamespacedKey): boolean;
	loadAdvancement(key: NamespacedKey, advancement: string): Advancement;
}

export class UnsafeValues {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UnsafeValues');
	}
}

