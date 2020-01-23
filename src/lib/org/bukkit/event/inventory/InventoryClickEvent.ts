declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface InventoryClickEvent extends InventoryInteractEvent {
	getSlot(): number;
	getHandlers(): HandlerList;
	getClickedInventory(): Inventory;
	getSlotType(): InventoryType$SlotType;
	getCursor(): ItemStack;
	setCursor(stack: ItemStack): void;
	setCurrentItem(stack: ItemStack): void;
	getHotbarButton(): number;
	getClick(): ClickType;
	isLeftClick(): boolean;
	isRightClick(): boolean;
	isShiftClick(): boolean;
	getAction(): InventoryAction;
	getRawSlot(): number;
	getCurrentItem(): ItemStack;
	getResult(): Event$Result;
	setResult(newResult: Event$Result): void;
	setCancelled(toCancel: boolean): void;
	isCancelled(): boolean;
	getWhoClicked(): HumanEntity;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class InventoryClickEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryClickEvent');
	}
	constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
	constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
	constructor(...args: any[]) {
		return new InventoryClickEvent.$javaClass(...args);
	}
}

