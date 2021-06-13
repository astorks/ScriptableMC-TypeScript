declare var Java: any;
import ClickType from './ClickType.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryAction from './InventoryAction.js'
import InventoryClickEvent from './InventoryClickEvent.js'
import InventoryType$SlotType from './InventoryType$SlotType.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import SmithingInventory from '../../../../org/bukkit/inventory/SmithingInventory.js'

export default interface SmithItemEvent extends InventoryClickEvent {
	getAction(): InventoryAction;
	getClick(): ClickType;
	getClickedInventory(): Inventory;
	getCurrentItem(): ItemStack;
	getCursor(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getHotbarButton(): number;
	getInventory(): Inventory;
	getInventory(): SmithingInventory;
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

export default class SmithItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.SmithItemEvent');
	}

	constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
	constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
	constructor(...args: any[]) {
		return new SmithItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SmithItemEvent.$javaClass.getHandlerList(...args);
	}

}

