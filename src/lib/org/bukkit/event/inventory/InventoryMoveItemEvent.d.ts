import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface InventoryMoveItemEvent extends Event, Cancellable {
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    getSource(): Inventory;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getDestination(): Inventory;
    getInitiator(): Inventory;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class InventoryMoveItemEvent {
    static get $javaClass(): any;
    constructor(sourceInventory: Inventory, itemStack: ItemStack, destinationInventory: Inventory, didSourceInitiate: boolean);
    static getHandlerList(): HandlerList;
}
