import InventoryClickEvent from '../../../org/bukkit/event/inventory/InventoryClickEvent.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface ClickableItem {
    getItem(): ItemStack;
    run(e: InventoryClickEvent): void;
}
export default class ClickableItem {
    static get $javaClass(): any;
    static of(item: ItemStack, consumer: any): ClickableItem;
    static empty(item: ItemStack): ClickableItem;
}
