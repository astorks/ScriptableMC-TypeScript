import CraftingInventory from '../../../../org/bukkit/inventory/CraftingInventory.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import Recipe from '../../../../org/bukkit/inventory/Recipe.js';
export default interface PrepareItemCraftEvent extends InventoryEvent {
    getInventory(): CraftingInventory;
    getInventory(): Inventory;
    getRecipe(): Recipe;
    getHandlers(): HandlerList;
    isRepair(): boolean;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PrepareItemCraftEvent {
    static get $javaClass(): any;
    constructor(what: CraftingInventory, view: InventoryView, isRepair: boolean);
    static getHandlerList(): HandlerList;
}
