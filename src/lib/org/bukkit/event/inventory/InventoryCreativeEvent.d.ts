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
    getHandlers(): HandlerList;
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
export default class InventoryCreativeEvent {
    static get $javaClass(): any;
    constructor(what: InventoryView, type: InventoryType$SlotType, slot: number, newItem: ItemStack);
    static getHandlerList(): HandlerList;
}
