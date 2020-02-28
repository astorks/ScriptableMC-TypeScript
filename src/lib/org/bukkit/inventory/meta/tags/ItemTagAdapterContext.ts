declare var Java: any;
import CustomItemTagContainer from './CustomItemTagContainer.js'

export default interface ItemTagAdapterContext {
	newTagContainer(): CustomItemTagContainer;
}

export default class ItemTagAdapterContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.tags.ItemTagAdapterContext');
	}

}

