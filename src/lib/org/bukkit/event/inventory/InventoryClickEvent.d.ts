import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { InventoryType$SlotType } from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { ClickType } from '../../../../org/bukkit/event/inventory/ClickType.js';
import { InventoryAction } from '../../../../org/bukkit/event/inventory/InventoryAction.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryInteractEvent } from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
export interface InventoryClickEvent extends InventoryInteractEvent {
    getSlot(): number;
    getHandlers(): HandlerList;
    getCursor(): ItemStack;
    getSlotType(): InventoryType$SlotType;
    setCursor(stack: ItemStack): void;
    getClickedInventory(): Inventory;
    isShiftClick(): boolean;
    getHotbarButton(): number;
    getRawSlot(): number;
    getCurrentItem(): ItemStack;
    getClick(): ClickType;
    isLeftClick(): boolean;
    getAction(): InventoryAction;
    setCurrentItem(stack: ItemStack): void;
    isRightClick(): boolean;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    getWhoClicked(): HumanEntity;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class InventoryClickEvent {
    static get $javaClass(): any;
    constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
    constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
    static getHandlerList(): HandlerList;
}
