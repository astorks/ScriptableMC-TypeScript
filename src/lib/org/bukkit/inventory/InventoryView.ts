declare var Java: any;
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {InventoryType} from '../../../org/bukkit/event/inventory/InventoryType.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js'

export interface InventoryView {
	setProperty(prop: InventoryView$Property, value: number): boolean;
	close(): void;
	getType(): InventoryType;
	getInventory(rawSlot: number): Inventory;
	getTitle(): string;
	getPlayer(): HumanEntity;
	setItem(slot: number, item: ItemStack): void;
	getItem(slot: number): ItemStack;
	getBottomInventory(): Inventory;
	getTopInventory(): Inventory;
	convertSlot(rawSlot: number): number;
	getSlotType(slot: number): InventoryType$SlotType;
	countSlots(): number;
	getCursor(): ItemStack;
	setCursor(item: ItemStack): void;
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

