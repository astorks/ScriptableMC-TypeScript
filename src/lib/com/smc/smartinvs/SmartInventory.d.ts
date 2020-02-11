import ClickableItem from '../../../fr/minuskube/inv/ClickableItem.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import SmartInventory$Builder from '../../../fr/minuskube/inv/SmartInventory$Builder.js';
import SmartInventoryProvider from '../../../com/smc/smartinvs/SmartInventoryProvider.js';
export default interface SmartInventory {
}
export default class SmartInventory {
    static get $javaClass(): any;
    static get INSTANCE(): SmartInventory;
    static builder(): SmartInventory$Builder;
    static provider(scriptableObject: any): SmartInventoryProvider;
    static clickableItem(item: ItemStack): ClickableItem;
    static clickableItem(item: ItemStack, consumer: any): ClickableItem;
}
