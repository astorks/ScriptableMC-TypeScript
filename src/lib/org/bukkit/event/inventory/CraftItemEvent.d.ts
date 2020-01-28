import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { CraftingInventory } from '../../../../org/bukkit/inventory/CraftingInventory.js';
import { Recipe } from '../../../../org/bukkit/inventory/Recipe.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { InventoryType$SlotType } from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import { InventoryAction } from '../../../../org/bukkit/event/inventory/InventoryAction.js';
import { ClickType } from '../../../../org/bukkit/event/inventory/ClickType.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { InventoryClickEvent } from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js';
export interface CraftItemEvent extends InventoryClickEvent {
    getInventory(): Inventory;
    getInventory(): CraftingInventory;
    getRecipe(): Recipe;
    getHandlers(): HandlerList;
    setCursor(stack: ItemStack): void;
    getCursor(): ItemStack;
    getSlotType(): InventoryType$SlotType;
    getClickedInventory(): Inventory;
    getCurrentItem(): ItemStack;
    isRightClick(): boolean;
    isLeftClick(): boolean;
    isShiftClick(): boolean;
    setCurrentItem(stack: ItemStack): void;
    getRawSlot(): number;
    getHotbarButton(): number;
    getAction(): InventoryAction;
    getClick(): ClickType;
    getSlot(): number;
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
export declare class CraftItemEvent {
    static get $javaClass(): any;
    constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
    constructor(recipe: Recipe, what: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
    static getHandlerList(): HandlerList;
}
