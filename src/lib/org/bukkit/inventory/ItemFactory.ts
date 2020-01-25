declare var Java: any;
import {ItemMeta} from '../../../org/bukkit/inventory/meta/ItemMeta.js'
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Color} from '../../../org/bukkit/Color.js'

export interface ItemFactory {
	getItemMeta(arg0: Material): ItemMeta;
	asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta;
	asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta;
	isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean;
	isApplicable(arg0: ItemMeta, arg1: Material): boolean;
	updateMaterial(arg0: ItemMeta, arg1: Material): Material;
	getDefaultLeatherColor(): Color;
}

export class ItemFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ItemFactory');
	}
}

