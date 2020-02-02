import AnvilInventory from '../../../../org/bukkit/inventory/AnvilInventory.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface PrepareAnvilEvent extends InventoryEvent {
    setResult(result: ItemStack): void;
    getInventory(): Inventory;
    getInventory(): AnvilInventory;
    getResult(): ItemStack;
    getHandlers(): HandlerList;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PrepareAnvilEvent {
    static get $javaClass(): any;
    constructor(inventory: InventoryView, result: ItemStack);
    static getHandlerList(): HandlerList;
}
