import DragType from '../../../../org/bukkit/event/inventory/DragType.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryInteractEvent from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface InventoryDragEvent extends InventoryInteractEvent {
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
    setResult(newResult: Event$Result): void;
    getWhoClicked(): HumanEntity;
    getResult(): Event$Result;
    getInventory(): Inventory;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class InventoryDragEvent {
    static get $javaClass(): any;
    constructor(what: InventoryView, newCursor: ItemStack, oldCursor: ItemStack, right: boolean, slots: any);
    static getHandlerList(): HandlerList;
}
