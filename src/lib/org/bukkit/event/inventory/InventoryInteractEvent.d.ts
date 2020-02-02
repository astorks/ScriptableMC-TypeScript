import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
export default interface InventoryInteractEvent extends InventoryEvent, Cancellable {
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    setResult(newResult: Event$Result): void;
    getWhoClicked(): HumanEntity;
    getResult(): Event$Result;
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class InventoryInteractEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
