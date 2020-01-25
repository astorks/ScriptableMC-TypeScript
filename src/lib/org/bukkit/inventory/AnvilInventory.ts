declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface AnvilInventory extends Inventory {
	getRenameText(): string;
	getRepairCost(): number;
	setRepairCost(arg0: number): void;
	getMaximumRepairCost(): number;
	setMaximumRepairCost(arg0: number): void;
	setContents(arg0: Array<ItemStack>): void;
	getMaxStackSize(): number;
	getStorageContents(): Array<ItemStack>;
	setMaxStackSize(arg0: number): void;
	getItem(arg0: number): ItemStack;
	setItem(arg0: number, arg1: ItemStack): void;
	addItem(arg0: Array<ItemStack>): any;
	removeItem(arg0: Array<ItemStack>): any;
	getContents(): Array<ItemStack>;
	setStorageContents(arg0: Array<ItemStack>): void;
	containsAtLeast(arg0: ItemStack, arg1: number): boolean;
	firstEmpty(): number;
	getViewers(): any;
	getHolder(): InventoryHolder;
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

export class AnvilInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.AnvilInventory');
	}
}

