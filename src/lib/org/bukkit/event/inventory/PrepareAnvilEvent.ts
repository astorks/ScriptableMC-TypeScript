declare var Java: any;
import AnvilInventory from '../../../../org/bukkit/inventory/AnvilInventory.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface PrepareAnvilEvent extends InventoryEvent {
	getHandlers(): HandlerList;
	getInventory(): AnvilInventory;
	getInventory(): Inventory;
	setResult(result: ItemStack): void;
	getResult(): ItemStack;
	getViewers(): Array<HumanEntity>;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PrepareAnvilEvent {
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

