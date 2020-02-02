import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryInteractEvent from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import Merchant from '../../../../org/bukkit/inventory/Merchant.js';
import MerchantInventory from '../../../../org/bukkit/inventory/MerchantInventory.js';
export default interface TradeSelectEvent extends InventoryInteractEvent {
    getHandlers(): HandlerList;
    getIndex(): number;
    getInventory(): MerchantInventory;
    getInventory(): Inventory;
    getMerchant(): Merchant;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    setResult(newResult: Event$Result): void;
    getWhoClicked(): HumanEntity;
    getResult(): Event$Result;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class TradeSelectEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView, newIndex: number);
    static getHandlerList(): HandlerList;
}
