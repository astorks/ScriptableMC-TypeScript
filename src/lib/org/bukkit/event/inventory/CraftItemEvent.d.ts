import ClickType from '../../../../org/bukkit/event/inventory/ClickType.js';
import CraftingInventory from '../../../../org/bukkit/inventory/CraftingInventory.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryAction from '../../../../org/bukkit/event/inventory/InventoryAction.js';
import InventoryClickEvent from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js';
import InventoryType$SlotType from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Recipe from '../../../../org/bukkit/inventory/Recipe.js';
export default interface CraftItemEvent extends InventoryClickEvent {
    getInventory(): CraftingInventory;
    getInventory(): Inventory;
    getRecipe(): Recipe;
    getSlot(): number;
    getHandlers(): HandlerList;
    setCursor(stack: ItemStack): void;
    getCursor(): ItemStack;
    getSlotType(): InventoryType$SlotType;
    getClickedInventory(): Inventory;
    isShiftClick(): boolean;
    getAction(): InventoryAction;
    getHotbarButton(): number;
    getCurrentItem(): ItemStack;
    isRightClick(): boolean;
    getRawSlot(): number;
    isLeftClick(): boolean;
    setCurrentItem(stack: ItemStack): void;
    getClick(): ClickType;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    getWhoClicked(): HumanEntity;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class CraftItemEvent {
    static get $javaClass(): any;
    constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
    constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
    static getHandlerList(): HandlerList;
}
