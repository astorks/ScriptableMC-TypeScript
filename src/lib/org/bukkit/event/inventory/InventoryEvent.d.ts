import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface InventoryEvent extends Event {
    getInventory(): Inventory;
    getViewers(): any;
    getHandlers(): HandlerList;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class InventoryEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
