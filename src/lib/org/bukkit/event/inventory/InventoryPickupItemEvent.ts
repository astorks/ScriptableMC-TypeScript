declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import Item from '../../../../org/bukkit/entity/Item.js'

export default interface InventoryPickupItemEvent extends Event, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getItem(): Item;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class InventoryPickupItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryPickupItemEvent');
	}

	constructor(inventory: Inventory, item: Item);
	constructor(...args: any[]) {
		return new InventoryPickupItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryPickupItemEvent.$javaClass.getHandlerList(...args);
	}

}

