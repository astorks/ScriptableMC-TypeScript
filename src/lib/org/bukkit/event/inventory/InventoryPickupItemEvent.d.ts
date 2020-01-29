import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface InventoryPickupItemEvent extends Event, Cancellable {
    getInventory(): Inventory;
    getItem(): Item;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class InventoryPickupItemEvent {
    static get $javaClass(): any;
    constructor(inventory: Inventory, item: Item);
    static getHandlerList(): HandlerList;
}
