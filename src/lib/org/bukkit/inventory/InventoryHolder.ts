declare var Java: any;
import Inventory from './Inventory.js'

export default interface InventoryHolder {
	getInventory(): Inventory;
}

export default class InventoryHolder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.InventoryHolder');
	}

}

