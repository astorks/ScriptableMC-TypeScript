declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'

export default interface InventoryInteractEvent extends InventoryEvent, Cancellable {
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
	setResult(newResult: Event$Result): void;
	getResult(): Event$Result;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getViewers(): Array<HumanEntity>;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class InventoryInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryInteractEvent');
	}
	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryInteractEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryInteractEvent.$javaClass.getHandlerList(...args);
	}
}

