declare var Java: any;
import ItemTagAdapterContext from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js'
import ItemTagType from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js'
import NamespacedKey from '../../../../../org/bukkit/NamespacedKey.js'

export default interface CustomItemTagContainer {
	getAdapterContext(): ItemTagAdapterContext;
	getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): any;
	hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean;
	isEmpty(): boolean;
	removeCustomTag(arg0: NamespacedKey): void;
	setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: any): void;
}

export default class CustomItemTagContainer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.CustomItemTagContainer');
	}

}

