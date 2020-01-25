declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface InventoryCreativeEvent extends InventoryClickEvent {
	setCursor(item: ItemStack): void;
	getCursor(): ItemStack;
	getHandlers(): HandlerList;
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

export class InventoryCreativeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.InventoryCreativeEvent');
	}
	constructor(what: InventoryView, type: InventoryType$SlotType, slot: number, newItem: ItemStack);
	constructor(...args: any[]) {
		return new InventoryCreativeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return InventoryCreativeEvent.$javaClass.getHandlerList(...args);
	}
}

