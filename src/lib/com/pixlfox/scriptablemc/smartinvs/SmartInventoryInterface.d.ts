import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import SmartInventory$Builder from '../../../../fr/minuskube/inv/SmartInventory$Builder.js';
import SmartInventoryProvider from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryProvider.js';
import SmartItemBuilder from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js';
export default interface SmartInventoryInterface {
    builder(): SmartInventory$Builder;
    provider(scriptableObject: any): SmartInventoryProvider;
    clickableItem(item: ItemStack, consumer: any): ClickableItem;
    clickableItem(item: ItemStack): ClickableItem;
    itemBuilder(itemStack: ItemStack): SmartItemBuilder;
}
export default class SmartInventoryInterface {
    static get $javaClass(): any;
    constructor();
}
