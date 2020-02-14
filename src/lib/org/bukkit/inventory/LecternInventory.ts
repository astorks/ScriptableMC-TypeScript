declare var Java: any;
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Lectern from '../../../org/bukkit/block/Lectern.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'

export default interface LecternInventory extends Inventory {
	getHolder(): Lectern;
	getHolder(): InventoryHolder;
	setContents(arg0: Array<ItemStack>): void;
	getContents(): Array<ItemStack>;
	getMaxStackSize(): number;
	getStorageContents(): Array<ItemStack>;
	getItem(arg0: number): ItemStack;
	setItem(arg0: number, arg1: ItemStack): void;
	setMaxStackSize(arg0: number): void;
	addItem(arg0: Array<ItemStack>): any;
	removeItem(arg0: Array<ItemStack>): any;
	setStorageContents(arg0: Array<ItemStack>): void;
	containsAtLeast(arg0: ItemStack, arg1: number): boolean;
	firstEmpty(): number;
	getViewers(): Array<HumanEntity>;
	remove(arg0: ItemStack): void;
	remove(arg0: Material): void;
	clear(): void;
	clear(arg0: number): void;
	contains(arg0: ItemStack, arg1: number): boolean;
	contains(arg0: Material): boolean;
	contains(arg0: Material, arg1: number): boolean;
	contains(arg0: ItemStack): boolean;
	iterator(): any;
	iterator(arg0: number): any;
	iterator(): any;
	getLocation(): Location;
	first(arg0: ItemStack): number;
	first(arg0: Material): number;
	getType(): InventoryType;
	getSize(): number;
	all(arg0: ItemStack): any;
	all(arg0: Material): any;
	spliterator(): any;
	forEach(arg0: any): void;
}

export default class LecternInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.LecternInventory');
	}
}

