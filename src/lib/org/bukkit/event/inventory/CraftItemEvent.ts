declare var Java: any;
import ClickType from '../../../../org/bukkit/event/inventory/ClickType.js'
import CraftingInventory from '../../../../org/bukkit/inventory/CraftingInventory.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryAction from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import InventoryClickEvent from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'
import InventoryType$SlotType from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Recipe from '../../../../org/bukkit/inventory/Recipe.js'

export default interface CraftItemEvent extends InventoryClickEvent {
	getInventory(): Inventory;
	getInventory(): CraftingInventory;
	getRecipe(): Recipe;
	getHandlers(): HandlerList;
	setCursor(stack: ItemStack): void;
	getCursor(): ItemStack;
	getSlotType(): InventoryType$SlotType;
	getClickedInventory(): Inventory;
	getCurrentItem(): ItemStack;
	isRightClick(): boolean;
	isLeftClick(): boolean;
	isShiftClick(): boolean;
	setCurrentItem(stack: ItemStack): void;
	getRawSlot(): number;
	getHotbarButton(): number;
	getAction(): InventoryAction;
	getClick(): ClickType;
	getSlot(): number;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
	setResult(newResult: Event$Result): void;
	getResult(): Event$Result;
	getViewers(): Array<HumanEntity>;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class CraftItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.CraftItemEvent');
	}
	constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
	constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
	constructor(...args: any[]) {
		return new CraftItemEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return CraftItemEvent.$javaClass.getHandlerList(...args);
	}
}

