declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {AnvilInventory} from '../../../../org/bukkit/inventory/AnvilInventory.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface PrepareAnvilEvent extends InventoryEvent {
	getHandlers(): HandlerList;
	getInventory(): AnvilInventory;
	getInventory(): Inventory;
	setResult(result: ItemStack): void;
	getResult(): ItemStack;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PrepareAnvilEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareAnvilEvent');
	}
	constructor(inventory: InventoryView, result: ItemStack);
	constructor(...args: any[]) {
		return new PrepareAnvilEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PrepareAnvilEvent.$javaClass.getHandlerList(...args);
	}
}

