declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'

export default interface InventoryCloseEvent extends InventoryEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getPlayer(): HumanEntity;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
}

export default class InventoryCloseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryCloseEvent');
	}

	constructor(transaction: InventoryView);
	constructor(...args: any[]) {
		return new InventoryCloseEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryCloseEvent.$javaClass.getHandlerList(...args);
	}

}

