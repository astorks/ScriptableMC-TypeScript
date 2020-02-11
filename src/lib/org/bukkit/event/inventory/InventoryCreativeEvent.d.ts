import ClickType from '../../../../org/bukkit/event/inventory/ClickType.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryAction from '../../../../org/bukkit/event/inventory/InventoryAction.js';
import InventoryClickEvent from '../../../../org/bukkit/event/inventory/InventoryClickEvent.js';
import InventoryType$SlotType from '../../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface InventoryCreativeEvent extends InventoryClickEvent {
    setCursor(item: ItemStack): void;
    getCursor(): ItemStack;
    getSlot(): number;
    getClickedInventory(): Inventory;
    getHandlers(): HandlerList;
    getSlotType(): InventoryType$SlotType;
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
export default class InventoryCreativeEvent {
    static get $javaClass(): any;
    constructor(what: InventoryView, type: InventoryType$SlotType, slot: number, newItem: ItemStack);
    static getHandlerList(): HandlerList;
}
