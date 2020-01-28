import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface InventoryPickupItemEvent extends Event, Cancellable {
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getItem(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class InventoryPickupItemEvent {
    static get $javaClass(): any;
    constructor(inventory: Inventory, item: Item);
    static getHandlerList(): HandlerList;
}
