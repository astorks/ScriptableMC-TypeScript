declare var Java: any;
import ClickableItem from '../../../fr/minuskube/inv/ClickableItem.js'
import InventoryManager from '../../../fr/minuskube/inv/InventoryManager.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import SmartInventory$Builder from '../../../fr/minuskube/inv/SmartInventory$Builder.js'
import SmartInventoryProvider from '../../../com/smc/smartinvs/SmartInventoryProvider.js'

export default class SmartInventory {
	public static get $javaClass(): any {
		return Java.type('com.smc.smartinvs.SmartInventory');
	}

	constructor();
	constructor(...args: any[]) {
		return new SmartInventory.$javaClass(...args);
	}

	public static builder(inventoryManager: InventoryManager): SmartInventory$Builder;
	public static builder(...args: any[]): any {
		return SmartInventory.$javaClass.builder(...args);
	}

	public static clickableItem(item: ItemStack): ClickableItem;
	public static clickableItem(item: ItemStack, consumer: any): ClickableItem;
	public static clickableItem(...args: any[]): any {
		return SmartInventory.$javaClass.clickableItem(...args);
	}

	public static provider(scriptableObject: any): SmartInventoryProvider;
	public static provider(...args: any[]): any {
		return SmartInventory.$javaClass.provider(...args);
	}

}

