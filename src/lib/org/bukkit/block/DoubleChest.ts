declare var Java: any;
import DoubleChestInventory from '../../../org/bukkit/inventory/DoubleChestInventory.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js'
import Location from '../../../org/bukkit/Location.js'
import World from '../../../org/bukkit/World.js'

export default interface DoubleChest extends InventoryHolder {
	getInventory(): Inventory;
	getLeftSide(): InventoryHolder;
	getLocation(): Location;
	getRightSide(): InventoryHolder;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
}

export default class DoubleChest {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.DoubleChest');
	}

	constructor(chest: DoubleChestInventory);
	constructor(...args: any[]) {
		return new DoubleChest.$javaClass(...args);
	}

}

