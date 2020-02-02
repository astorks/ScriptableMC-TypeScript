import ClickType from '../../../../org/bukkit/event/inventory/ClickType.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryAction from '../../../../org/bukkit/event/inventory/InventoryAction.js';
import InventoryInteractEvent from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js';
import InventoryType$SlotType from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface InventoryClickEvent extends InventoryInteractEvent {
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
    setResult(newResult: Event$Result): void;
    getWhoClicked(): HumanEntity;
    getResult(): Event$Result;
    getInventory(): Inventory;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class InventoryClickEvent {
    static get $javaClass(): any;
    constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
    constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
    static getHandlerList(): HandlerList;
}
