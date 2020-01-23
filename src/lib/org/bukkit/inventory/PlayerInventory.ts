declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface PlayerInventory extends Inventory {
	setItem(index: number, item: ItemStack): void;
	getHolder(): InventoryHolder;
	getHolder(): HumanEntity;
	setItemInHand(stack: ItemStack): void;
	getItemInHand(): ItemStack;
	getItemInMainHand(): ItemStack;
	setItemInMainHand(item: ItemStack): void;
	setItemInOffHand(item: ItemStack): void;
	setHelmet(helmet: ItemStack): void;
	getChestplate(): ItemStack;
	setChestplate(chestplate: ItemStack): void;
	getHelmet(): ItemStack;
	setLeggings(leggings: ItemStack): void;
	getLeggings(): ItemStack;
	getItemInOffHand(): ItemStack;
	getBoots(): ItemStack;
	setBoots(boots: ItemStack): void;
	getArmorContents(): Array<ItemStack>;
	setArmorContents(items: Array<ItemStack>): void;
	setExtraContents(items: Array<ItemStack>): void;
	getExtraContents(): Array<ItemStack>;
	getHeldItemSlot(): number;
	setHeldItemSlot(slot: number): void;
	remove(material: Material): void;
	remove(item: ItemStack): void;
	clear(): void;
	clear(index: number): void;
	contains(material: Material): boolean;
	contains(item: ItemStack, amount: number): boolean;
	contains(material: Material, amount: number): boolean;
	contains(item: ItemStack): boolean;
	iterator(): any;
	iterator(): any;
	iterator(index: number): any;
	first(item: ItemStack): number;
	first(material: Material): number;
	getLocation(): Location;
	getType(): InventoryType;
	getSize(): number;
	all(material: Material): any;
	all(item: ItemStack): any;
	setContents(items: Array<ItemStack>): void;
	getMaxStackSize(): number;
	addItem(items: Array<ItemStack>): any;
	removeItem(items: Array<ItemStack>): any;
	firstEmpty(): number;
	getItem(index: number): ItemStack;
	setMaxStackSize(size: number): void;
	getStorageContents(): Array<ItemStack>;
	getContents(): Array<ItemStack>;
	setStorageContents(items: Array<ItemStack>): void;
	containsAtLeast(item: ItemStack, amount: number): boolean;
	getViewers(): any;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}
}

