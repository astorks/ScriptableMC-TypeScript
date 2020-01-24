declare var Java: any;
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ClickType} from '../../../../org/bukkit/event/inventory/ClickType.js'
import {InventoryAction} from '../../../../org/bukkit/event/inventory/InventoryAction.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryType$SlotType} from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryClickEvent} from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface InventoryCreativeEvent extends InventoryClickEvent {
	getCursor(): ItemStack;
	setCursor(item: ItemStack): void;
	getSlot(): number;
	getHandlers(): HandlerList;
	getRawSlot(): number;
	isRightClick(): boolean;
	isShiftClick(): boolean;
	getCurrentItem(): ItemStack;
	getHotbarButton(): number;
	setCurrentItem(stack: ItemStack): void;
	getClick(): ClickType;
	getAction(): InventoryAction;
	isLeftClick(): boolean;
	getClickedInventory(): Inventory;
	getSlotType(): InventoryType$SlotType;
	getResult(): Event$Result;
	setResult(newResult: Event$Result): void;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	getWhoClicked(): HumanEntity;
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
}

