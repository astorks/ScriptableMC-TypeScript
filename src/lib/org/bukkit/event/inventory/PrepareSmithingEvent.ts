declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from './InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import SmithingInventory from '../../../../org/bukkit/inventory/SmithingInventory.js'

export default interface PrepareSmithingEvent extends InventoryEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventory(): SmithingInventory;
	getResult(): ItemStack;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	setResult(result: ItemStack): void;
}

export default class PrepareSmithingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareSmithingEvent');
	}

	constructor(inventory: InventoryView, result: ItemStack);
	constructor(...args: any[]) {
		return new PrepareSmithingEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PrepareSmithingEvent.$javaClass.getHandlerList(...args);
	}

}

