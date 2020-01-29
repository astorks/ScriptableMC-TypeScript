import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { MerchantInventory } from '../../../../org/bukkit/inventory/MerchantInventory.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Merchant } from '../../../../org/bukkit/inventory/Merchant.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryInteractEvent } from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
export interface TradeSelectEvent extends InventoryInteractEvent {
    getIndex(): number;
    getInventory(): Inventory;
    getInventory(): MerchantInventory;
    getHandlers(): HandlerList;
    getMerchant(): Merchant;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    getWhoClicked(): HumanEntity;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class TradeSelectEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView, newIndex: number);
    static getHandlerList(): HandlerList;
}
