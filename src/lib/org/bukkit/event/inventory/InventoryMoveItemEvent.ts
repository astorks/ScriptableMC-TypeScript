declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface InventoryMoveItemEvent extends Event, Cancellable {
	getDestination(): Inventory;
	getEventName(): string;
	getHandlers(): HandlerList;
	getInitiator(): Inventory;
	getItem(): ItemStack;
	getSource(): Inventory;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setItem(itemStack: ItemStack): void;
}

export default class InventoryMoveItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryMoveItemEvent');
	}

	constructor(sourceInventory: Inventory, itemStack: ItemStack, destinationInventory: Inventory, didSourceInitiate: boolean);
	constructor(...args: any[]) {
		return new InventoryMoveItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryMoveItemEvent.$javaClass.getHandlerList(...args);
	}

}

