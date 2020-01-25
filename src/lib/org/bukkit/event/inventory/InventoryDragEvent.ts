declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {DragType} from '../../../../org/bukkit/event/inventory/DragType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface InventoryDragEvent extends InventoryInteractEvent {
	getHandlers(): HandlerList;
	setCursor(newCursor: ItemStack): void;
	getCursor(): ItemStack;
	getNewItems(): any;
	getRawSlots(): any;
	getInventorySlots(): any;
	getOldCursor(): ItemStack;
	getType(): DragType;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	setResult(newResult: Event$Result): void;
	getWhoClicked(): HumanEntity;
	getResult(): Event$Result;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryDragEvent {
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

