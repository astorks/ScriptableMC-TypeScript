import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { InventoryClickEvent } from '../../../org/bukkit/event/inventory/InventoryClickEvent.js';
export interface ClickableItem {
    getItem(): ItemStack;
    run(e: InventoryClickEvent): void;
}
export declare class ClickableItem {
    static get $javaClass(): any;
    static of(item: ItemStack, consumer: any): ClickableItem;
    static empty(item: ItemStack): ClickableItem;
}
