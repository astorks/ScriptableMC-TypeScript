declare var Java: any;
import Advancement from '../../org/bukkit/advancement/Advancement.js'
import BlockData from '../../org/bukkit/block/data/BlockData.js'
import ItemStack from '../../org/bukkit/inventory/ItemStack.js'
import Material from '../../org/bukkit/Material.js'
import MaterialData from '../../org/bukkit/material/MaterialData.js'
import NamespacedKey from '../../org/bukkit/NamespacedKey.js'
import PluginDescriptionFile from '../../org/bukkit/plugin/PluginDescriptionFile.js'

export default interface UnsafeValues {
	checkSupported(arg0: PluginDescriptionFile): void;
	fromLegacy(arg0: MaterialData): Material;
	fromLegacy(arg0: Material): Material;
	fromLegacy(arg0: Material, arg1: number): BlockData;
	fromLegacy(arg0: MaterialData, arg1: boolean): Material;
	getDataVersion(): number;
	getMaterial(arg0: string, arg1: number): Material;
	loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement;
	modifyItemStack(arg0: ItemStack, arg1: string): ItemStack;
	processClass(arg0: PluginDescriptionFile, arg1: string, arg2: Array<number>): Array<number>;
	removeAdvancement(arg0: NamespacedKey): boolean;
	toLegacy(arg0: Material): Material;
}

export default class UnsafeValues {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.UnsafeValues');
	}

}

