import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface InventoryMoveItemEvent extends Event, Cancellable {
    getHandlers(): HandlerList;
    getSource(): Inventory;
    setItem(itemStack: ItemStack): void;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getInitiator(): Inventory;
    getDestination(): Inventory;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class InventoryMoveItemEvent {
    static get $javaClass(): any;
    constructor(sourceInventory: Inventory, itemStack: ItemStack, destinationInventory: Inventory, didSourceInitiate: boolean);
    static getHandlerList(): HandlerList;
}
