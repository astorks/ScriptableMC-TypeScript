declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryHolder} from '../../../org/bukkit/inventory/InventoryHolder.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Material} from '../../../org/bukkit/Material.js'
import {Location} from '../../../org/bukkit/Location.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'

export interface PlayerInventory extends Inventory {
	getItemInHand(): ItemStack;
	setItemInHand(stack: ItemStack): void;
	setItem(index: number, item: ItemStack): void;
	getHolder(): InventoryHolder;
	getHolder(): HumanEntity;
	getChestplate(): ItemStack;
	getArmorContents(): Array<ItemStack>;
	setChestplate(chestplate: ItemStack): void;
	setArmorContents(items: Array<ItemStack>): void;
	setLeggings(leggings: ItemStack): void;
	getHeldItemSlot(): number;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	setBoots(boots: ItemStack): void;
	getLeggings(): ItemStack;
	setItemInMainHand(item: ItemStack): void;
	getExtraContents(): Array<ItemStack>;
	getHelmet(): ItemStack;
	setHelmet(helmet: ItemStack): void;
	setItemInOffHand(item: ItemStack): void;
	getBoots(): ItemStack;
	setExtraContents(items: Array<ItemStack>): void;
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
	getItem(index: number): ItemStack;
	removeItem(items: Array<ItemStack>): any;
	containsAtLeast(item: ItemStack, amount: number): boolean;
	firstEmpty(): number;
	getViewers(): any;
	getStorageContents(): Array<ItemStack>;
	setMaxStackSize(size: number): void;
	addItem(items: Array<ItemStack>): any;
	getContents(): Array<ItemStack>;
	setStorageContents(items: Array<ItemStack>): void;
	spliterator(): any;
	forEach(arg0: any): void;
}

export class PlayerInventory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.PlayerInventory');
	}
}

