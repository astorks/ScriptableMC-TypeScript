declare var Java: any;
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js'
import InventoryType$SlotType from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import InventoryView$Property from '../../../org/bukkit/inventory/InventoryView$Property.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'

export default interface InventoryView {
	close(): void;
	convertSlot(rawSlot: number): number;
	countSlots(): number;
	getBottomInventory(): Inventory;
	getCursor(): ItemStack;
	getInventory(rawSlot: number): Inventory;
	getItem(slot: number): ItemStack;
	getPlayer(): HumanEntity;
	getSlotType(slot: number): InventoryType$SlotType;
	getTitle(): string;
	getTopInventory(): Inventory;
	getType(): InventoryType;
	setCursor(item: ItemStack): void;
	setItem(slot: number, item: ItemStack): void;
	setProperty(prop: InventoryView$Property, value: number): boolean;
}

export default class InventoryView {
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

