import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
export default interface InventoryInteractEvent extends InventoryEvent, Cancellable {
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    setCancelled(toCancel: boolean): void;
    isCancelled(): boolean;
    getWhoClicked(): HumanEntity;
    getInventory(): Inventory;
    getViewers(): Array<HumanEntity>;
    getHandlers(): HandlerList;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class InventoryInteractEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
