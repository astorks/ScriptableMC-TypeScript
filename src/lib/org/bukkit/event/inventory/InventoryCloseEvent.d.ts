import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface InventoryCloseEvent extends InventoryEvent {
    getHandlers(): HandlerList;
    getPlayer(): HumanEntity;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class InventoryCloseEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
