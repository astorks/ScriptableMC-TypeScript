import { InventoryClickEvent } from '../../../org/bukkit/event/inventory/InventoryClickEvent.js';
import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
export interface ClickableItem {
    run(e: InventoryClickEvent): void;
    getItem(): ItemStack;
}
export declare class ClickableItem {
    static get $javaClass(): any;
    static empty(item: ItemStack): ClickableItem;
    static of(item: ItemStack, consumer: any): ClickableItem;
}
