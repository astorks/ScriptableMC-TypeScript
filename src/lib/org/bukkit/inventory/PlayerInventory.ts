declare var Java: any;
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'

export default interface PlayerInventory extends Inventory {
	addItem(arg0: Array<ItemStack>): any;
	all(arg0: Material): any;
	all(arg0: ItemStack): any;
	clear(): void;
	clear(arg0: number): void;
	contains(arg0: Material): boolean;
	contains(arg0: ItemStack): boolean;
	contains(arg0: ItemStack, arg1: number): boolean;
	contains(arg0: Material, arg1: number): boolean;
	containsAtLeast(arg0: ItemStack, arg1: number): boolean;
	first(arg0: ItemStack): number;
	first(arg0: Material): number;
	firstEmpty(): number;
	forEach(action: any): void;
	getArmorContents(): Array<ItemStack>;
	getBoots(): ItemStack;
	getChestplate(): ItemStack;
	getContents(): Array<ItemStack>;
	getExtraContents(): Array<ItemStack>;
	getHeldItemSlot(): number;
	getHelmet(): ItemStack;
	getHolder(): HumanEntity;
	getHolder(): InventoryHolder;
	getItem(arg0: number): ItemStack;
	getItemInHand(): ItemStack;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	getLeggings(): ItemStack;
	getLocation(): Location;
	getMaxStackSize(): number;
	getSize(): number;
	getStorageContents(): Array<ItemStack>;
	getType(): InventoryType;
	getViewers(): Array<HumanEntity>;
	iterator(): any;
	iterator(): any;
	iterator(arg0: number): any;
	remove(arg0: Material): void;
	remove(arg0: ItemStack): void;
	removeItem(arg0: Array<ItemStack>): any;
	setArmorContents(arg0: Array<ItemStack>): void;
	setBoots(arg0: ItemStack): void;
	setChestplate(arg0: ItemStack): void;
	setContents(arg0: Array<ItemStack>): void;
	setExtraContents(arg0: Array<ItemStack>): void;
	setHeldItemSlot(arg0: number): void;
	setHelmet(arg0: ItemStack): void;
	setItem(arg0: number, arg1: ItemStack): void;
	setItemInHand(arg0: ItemStack): void;
	setItemInMainHand(arg0: ItemStack): void;
	setItemInOffHand(arg0: ItemStack): void;
	setLeggings(arg0: ItemStack): void;
	setMaxStackSize(arg0: number): void;
	setStorageContents(arg0: Array<ItemStack>): void;
	spliterator(): any;
}

export default class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}

}

