declare var Java: any;
import DragType from '../../../../org/bukkit/event/inventory/DragType.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryInteractEvent from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface InventoryDragEvent extends InventoryInteractEvent {
	getHandlers(): HandlerList;
	setCursor(newCursor: ItemStack): void;
	getCursor(): ItemStack;
	getRawSlots(): any;
	getInventorySlots(): any;
	getOldCursor(): ItemStack;
	getNewItems(): any;
	getType(): DragType;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
	setResult(newResult: Event$Result): void;
	getResult(): Event$Result;
	getInventory(): Inventory;
	getViewers(): Array<HumanEntity>;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class InventoryDragEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryDragEvent');
	}
	constructor(what: InventoryView, newCursor: ItemStack, oldCursor: ItemStack, right: boolean, slots: any);
	constructor(...args: any[]) {
		return new InventoryDragEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryDragEvent.$javaClass.getHandlerList(...args);
	}
}

