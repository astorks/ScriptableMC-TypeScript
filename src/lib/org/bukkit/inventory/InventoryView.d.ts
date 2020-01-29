import { InventoryView$Property } from '../../../org/bukkit/inventory/InventoryView$Property.js';
import { InventoryType } from '../../../org/bukkit/event/inventory/InventoryType.js';
import { Inventory } from '../../../org/bukkit/inventory/Inventory.js';
import { HumanEntity } from '../../../org/bukkit/entity/HumanEntity.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { InventoryType$SlotType } from '../../../org/bukkit/event/inventory/InventoryType$SlotType.js';
export interface InventoryView {
    setProperty(prop: InventoryView$Property, value: number): boolean;
    close(): void;
    getType(): InventoryType;
    getInventory(rawSlot: number): Inventory;
    getTitle(): string;
    getPlayer(): HumanEntity;
    setItem(slot: number, item: ItemStack): void;
    getItem(slot: number): ItemStack;
    getTopInventory(): Inventory;
    getBottomInventory(): Inventory;
    convertSlot(rawSlot: number): number;
    getCursor(): ItemStack;
    getSlotType(slot: number): InventoryType$SlotType;
    countSlots(): number;
    setCursor(item: ItemStack): void;
}
export declare class InventoryView {
    static get $javaClass(): any;
    constructor();
    static get OUTSIDE(): number;
}
