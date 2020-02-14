declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'

export default interface InventoryOpenEvent extends InventoryEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getPlayer(): HumanEntity;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class InventoryOpenEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryOpenEvent');
	}

	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryOpenEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryOpenEvent.$javaClass.getHandlerList(...args);
	}

}

