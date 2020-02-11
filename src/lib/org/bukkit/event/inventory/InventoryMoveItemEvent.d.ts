import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface InventoryMoveItemEvent extends Event, Cancellable {
    getItem(): ItemStack;
    setItem(itemStack: ItemStack): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getSource(): Inventory;
    getInitiator(): Inventory;
    getDestination(): Inventory;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class InventoryMoveItemEvent {
    static get $javaClass(): any;
    constructor(sourceInventory: Inventory, itemStack: ItemStack, destinationInventory: Inventory, didSourceInitiate: boolean);
    static getHandlerList(): HandlerList;
}
