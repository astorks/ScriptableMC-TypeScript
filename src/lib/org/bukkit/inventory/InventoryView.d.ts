import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import InventoryType$SlotType from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
import InventoryView$Property from '../../../org/bukkit/inventory/InventoryView$Property.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface InventoryView {
    setProperty(prop: InventoryView$Property, value: number): boolean;
    close(): void;
    getType(): InventoryType;
    getInventory(rawSlot: number): Inventory;
    getPlayer(): HumanEntity;
    getTitle(): string;
    getItem(slot: number): ItemStack;
    setItem(slot: number, item: ItemStack): void;
    getBottomInventory(): Inventory;
    countSlots(): number;
    getCursor(): ItemStack;
    setCursor(item: ItemStack): void;
    getTopInventory(): Inventory;
    getSlotType(slot: number): InventoryType$SlotType;
    convertSlot(rawSlot: number): number;
}
export default class InventoryView {
    static get $javaClass(): any;
    constructor();
    static get OUTSIDE(): number;
}
