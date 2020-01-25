declare var Java: any;
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'

export interface InventoryView {
	getTitle(): string;
	getInventory(rawSlot: number): Inventory;
	getPlayer(): HumanEntity;
	getItem(slot: number): ItemStack;
	setItem(slot: number, item: ItemStack): void;
	getTopInventory(): Inventory;
	getBottomInventory(): Inventory;
	convertSlot(rawSlot: number): number;
	setCursor(item: ItemStack): void;
	getCursor(): ItemStack;
	countSlots(): number;
	getSlotType(slot: number): InventoryType$SlotType;
	setProperty(prop: InventoryView$Property, value: number): boolean;
	close(): void;
	getType(): InventoryType;
}

export class InventoryView {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.InventoryView');
	}
	constructor();
	constructor(...args: any[]) {
		return new InventoryView.$javaClass(...args);
	}
	public static get OUTSIDE(): number {
		return InventoryView.$javaClass.OUTSIDE;
	}
}

