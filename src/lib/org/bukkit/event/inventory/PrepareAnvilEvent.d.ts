import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { AnvilInventory } from '../../../../org/bukkit/inventory/AnvilInventory.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface PrepareAnvilEvent extends InventoryEvent {
    getHandlers(): HandlerList;
    getInventory(): AnvilInventory;
    getInventory(): Inventory;
    setResult(result: ItemStack): void;
    getResult(): ItemStack;
    getViewers(): any;
    getView(): InventoryView;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PrepareAnvilEvent {
    static get $javaClass(): any;
    constructor(inventory: InventoryView, result: ItemStack);
    static getHandlerList(): HandlerList;
}
