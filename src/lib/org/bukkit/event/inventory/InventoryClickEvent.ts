declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface InventoryClickEvent extends InventoryInteractEvent {
	getHandlers(): HandlerList;
	setCursor(stack: ItemStack): void;
	getCursor(): ItemStack;
	getSlotType(): InventoryType$SlotType;
	getCurrentItem(): ItemStack;
	isRightClick(): boolean;
	isLeftClick(): boolean;
	isShiftClick(): boolean;
	setCurrentItem(stack: ItemStack): void;
	getClickedInventory(): Inventory;
	getRawSlot(): number;
	getHotbarButton(): number;
	getAction(): InventoryAction;
	getClick(): ClickType;
	getSlot(): number;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	setResult(newResult: Event$Result): void;
	getWhoClicked(): HumanEntity;
	getResult(): Event$Result;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class InventoryClickEvent {
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

