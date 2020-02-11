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
    getTitle(): string;
    getPlayer(): HumanEntity;
    setItem(slot: number, item: ItemStack): void;
    getItem(slot: number): ItemStack;
    getBottomInventory(): Inventory;
    convertSlot(rawSlot: number): number;
    setCursor(item: ItemStack): void;
    getCursor(): ItemStack;
    countSlots(): number;
    getSlotType(slot: number): InventoryType$SlotType;
    getTopInventory(): Inventory;
}
export default class InventoryView {
    static get $javaClass(): any;
    constructor();
    static get OUTSIDE(): number;
}
