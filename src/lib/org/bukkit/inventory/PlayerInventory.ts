declare var Java: any;
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'

export default interface PlayerInventory extends Inventory {
	getItemInHand(): ItemStack;
	setItemInHand(arg0: ItemStack): void;
	setItem(arg0: number, arg1: ItemStack): void;
	getHolder(): HumanEntity;
	getHolder(): InventoryHolder;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	setChestplate(arg0: ItemStack): void;
	getLeggings(): ItemStack;
	setLeggings(arg0: ItemStack): void;
	getBoots(): ItemStack;
	setBoots(arg0: ItemStack): void;
	getArmorContents(): Array<ItemStack>;
	setArmorContents(arg0: Array<ItemStack>): void;
	setItemInMainHand(arg0: ItemStack): void;
	setItemInOffHand(arg0: ItemStack): void;
	getHelmet(): ItemStack;
	setHelmet(arg0: ItemStack): void;
	getChestplate(): ItemStack;
	getExtraContents(): Array<ItemStack>;
	setExtraContents(arg0: Array<ItemStack>): void;
	getHeldItemSlot(): number;
	setHeldItemSlot(arg0: number): void;
	setContents(arg0: Array<ItemStack>): void;
	getContents(): Array<ItemStack>;
	getMaxStackSize(): number;
	getStorageContents(): Array<ItemStack>;
	getItem(arg0: number): ItemStack;
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

export default class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}
}

