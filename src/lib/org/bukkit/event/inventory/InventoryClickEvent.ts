declare var Java: any;
import ClickType from '../../../../org/bukkit/event/inventory/ClickType.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryAction from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import InventoryInteractEvent from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'
import InventoryType$SlotType from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface InventoryClickEvent extends InventoryInteractEvent {
	getAction(): InventoryAction;
	getClick(): ClickType;
	getClickedInventory(): Inventory;
	getCurrentItem(): ItemStack;
	getCursor(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getHotbarButton(): number;
	getInventory(): Inventory;
	getRawSlot(): number;
	getResult(): Event$Result;
	getSlot(): number;
	getSlotType(): InventoryType$SlotType;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	getWhoClicked(): HumanEntity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isLeftClick(): boolean;
	isRightClick(): boolean;
	isShiftClick(): boolean;
	setCancelled(toCancel: boolean): void;
	setCurrentItem(stack: ItemStack): void;
	setCursor(stack: ItemStack): void;
	setResult(newResult: Event$Result): void;
}

export default class InventoryClickEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryClickEvent');
	}

	constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
	constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
	constructor(...args: any[]) {
		return new InventoryClickEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryClickEvent.$javaClass.getHandlerList(...args);
	}

}

