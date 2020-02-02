import DoubleChest from '../../../org/bukkit/block/DoubleChest.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
export default interface DoubleChestInventory extends Inventory {
    getHolder(): InventoryHolder;
    getHolder(): DoubleChest;
    getLeftSide(): Inventory;
    getRightSide(): Inventory;
    remove(arg0: Material): void;
    remove(arg0: ItemStack): void;
    clear(): void;
    clear(arg0: number): void;
    contains(arg0: Material): boolean;
    contains(arg0: ItemStack, arg1: number): boolean;
    contains(arg0: Material, arg1: number): boolean;
    contains(arg0: ItemStack): boolean;
    iterator(): any;
    iterator(): any;
    iterator(arg0: number): any;
    first(arg0: ItemStack): number;
    first(arg0: Material): number;
    getLocation(): Location;
    getType(): InventoryType;
    getSize(): number;
    all(arg0: Material): any;
    all(arg0: ItemStack): any;
    setContents(arg0: Array<ItemStack>): void;
    getMaxStackSize(): number;
    containsAtLeast(arg0: ItemStack, arg1: number): boolean;
    getItem(arg0: number): ItemStack;
    getViewers(): any;
    addItem(arg0: Array<ItemStack>): any;
    setMaxStackSize(arg0: number): void;
    setStorageContents(arg0: Array<ItemStack>): void;
    getStorageContents(): Array<ItemStack>;
    setItem(arg0: number, arg1: ItemStack): void;
    removeItem(arg0: Array<ItemStack>): any;
    getContents(): Array<ItemStack>;
    firstEmpty(): number;
    spliterator(): any;
    forEach(action: any): void;
}
export default class DoubleChestInventory {
    static get $javaClass(): any;
}
