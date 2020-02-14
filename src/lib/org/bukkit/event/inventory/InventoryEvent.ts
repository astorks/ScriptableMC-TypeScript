declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'

export default interface InventoryEvent extends Event {
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getViewers(): Array<HumanEntity>;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class InventoryEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryEvent');
	}
	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryEvent.$javaClass.getHandlerList(...args);
	}
}

