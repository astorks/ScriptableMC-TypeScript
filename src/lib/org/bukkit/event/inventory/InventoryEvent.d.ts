import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface InventoryEvent extends Event {
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class InventoryEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
