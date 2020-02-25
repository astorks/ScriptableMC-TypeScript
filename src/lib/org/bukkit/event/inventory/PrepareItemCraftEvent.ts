declare var Java: any;
import CraftingInventory from '../../../../org/bukkit/inventory/CraftingInventory.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import Recipe from '../../../../org/bukkit/inventory/Recipe.js'

export default interface PrepareItemCraftEvent extends InventoryEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getInventory(): Inventory;
	getInventory(): CraftingInventory;
	getRecipe(): Recipe;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	isAsynchronous(): boolean;
	isRepair(): boolean;
}

export default class PrepareItemCraftEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.PrepareItemCraftEvent');
	}

	constructor(what: CraftingInventory, view: InventoryView, isRepair: boolean);
	constructor(...args: any[]) {
		return new PrepareItemCraftEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PrepareItemCraftEvent.$javaClass.getHandlerList(...args);
	}

}

