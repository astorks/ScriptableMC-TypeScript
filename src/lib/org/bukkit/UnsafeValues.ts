declare var Java: any;
import {Material} from '../../org/bukkit/Material.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {MaterialData} from '../../org/bukkit/material/MaterialData.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {PluginDescriptionFile} from '../../org/bukkit/plugin/PluginDescriptionFile.js'

export interface UnsafeValues {
	toLegacy(material: Material): Material;
	fromLegacy(material: Material, data: number): BlockData;
	fromLegacy(material: MaterialData, itemPriority: boolean): Material;
	fromLegacy(material: MaterialData): Material;
	fromLegacy(material: Material): Material;
	getDataVersion(): number;
	getMaterial(material: string, version: number): Material;
	modifyItemStack(stack: ItemStack, _arguments: string): ItemStack;
	removeAdvancement(key: NamespacedKey): boolean;
	loadAdvancement(key: NamespacedKey, advancement: string): Advancement;
	checkSupported(pdf: PluginDescriptionFile): void;
	processClass(pdf: PluginDescriptionFile, path: string, clazz: Array<number>): Array<number>;
}

export class UnsafeValues {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UnsafeValues');
	}
}

