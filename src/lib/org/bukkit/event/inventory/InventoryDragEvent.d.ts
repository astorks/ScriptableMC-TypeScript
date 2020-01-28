import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { DragType } from '../../../../org/bukkit/event/inventory/DragType.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryInteractEvent } from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
export interface InventoryDragEvent extends InventoryInteractEvent {
    getHandlers(): HandlerList;
    setCursor(newCursor: ItemStack): void;
    getCursor(): ItemStack;
    getNewItems(): any;
    getRawSlots(): any;
    getInventorySlots(): any;
    getOldCursor(): ItemStack;
    getType(): DragType;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    getWhoClicked(): HumanEntity;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class InventoryDragEvent {
    static get $javaClass(): any;
    constructor(what: InventoryView, newCursor: ItemStack, oldCursor: ItemStack, right: boolean, slots: any);
    static getHandlerList(): HandlerList;
}
