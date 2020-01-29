import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface InventoryOpenEvent extends InventoryEvent, Cancellable {
    getPlayer(): HumanEntity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class InventoryOpenEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
