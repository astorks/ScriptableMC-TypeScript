declare var Java: any;
import Advancement from './advancement/Advancement.js'
import BlockData from './block/data/BlockData.js'
import ItemStack from './inventory/ItemStack.js'
import Material from './Material.js'
import MaterialData from './material/MaterialData.js'
import NamespacedKey from './NamespacedKey.js'
import PluginDescriptionFile from './plugin/PluginDescriptionFile.js'

export default interface UnsafeValues {
	checkSupported(arg0: PluginDescriptionFile): void;
	fromLegacy(arg0: Material): Material;
	fromLegacy(arg0: MaterialData): Material;
	fromLegacy(arg0: MaterialData, arg1: boolean): Material;
	fromLegacy(arg0: Material, arg1: number): BlockData;
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

