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
    getSlot(): number;
    getClickedInventory(): Inventory;
    getHandlers(): HandlerList;
    setCursor(stack: ItemStack): void;
    getSlotType(): InventoryType$SlotType;
    getCursor(): ItemStack;
    getClick(): ClickType;
    getHotbarButton(): number;
    getAction(): InventoryAction;
    getRawSlot(): number;
    getCurrentItem(): ItemStack;
    isRightClick(): boolean;
    isLeftClick(): boolean;
    isShiftClick(): boolean;
    setCurrentItem(stack: ItemStack): void;
    setResult(newResult: Event$Result): void;
    getResult(): Event$Result;
    setCancelled(toCancel: boolean): void;
    isCancelled(): boolean;
    getWhoClicked(): HumanEntity;
    getInventory(): Inventory;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class InventoryClickEvent {
    static get $javaClass(): any;
    constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction, key: number);
    constructor(view: InventoryView, type: InventoryType$SlotType, slot: number, click: ClickType, action: InventoryAction);
    static getHandlerList(): HandlerList;
}
