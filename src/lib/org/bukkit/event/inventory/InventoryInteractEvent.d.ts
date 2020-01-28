import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface InventoryInteractEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    getWhoClicked(): HumanEntity;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class InventoryInteractEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
