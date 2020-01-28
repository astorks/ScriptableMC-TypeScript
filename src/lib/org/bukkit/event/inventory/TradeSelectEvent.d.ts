import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { MerchantInventory } from '../../../../org/bukkit/inventory/MerchantInventory.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { Merchant } from '../../../../org/bukkit/inventory/Merchant.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryInteractEvent } from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
export interface TradeSelectEvent extends InventoryInteractEvent {
    getHandlers(): HandlerList;
    getIndex(): number;
    getInventory(): MerchantInventory;
    getInventory(): Inventory;
    getMerchant(): Merchant;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    getWhoClicked(): HumanEntity;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class TradeSelectEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView, newIndex: number);
    static getHandlerList(): HandlerList;
}
