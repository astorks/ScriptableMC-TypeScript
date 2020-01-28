import { SmartItemBuilder } from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { SmartInventory$Builder } from '../../../../fr/minuskube/inv/SmartInventory$Builder.js';
import { ClickableItem } from '../../../../fr/minuskube/inv/ClickableItem.js';
import { SmartInventoryProvider } from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryProvider.js';
export interface SmartInventoryInterface {
    itemBuilder(itemStack: ItemStack): SmartItemBuilder;
    builder(): SmartInventory$Builder;
    clickableItem(item: ItemStack, consumer: any): ClickableItem;
    clickableItem(item: ItemStack): ClickableItem;
    provider(scriptableObject: any): SmartInventoryProvider;
}
export declare class SmartInventoryInterface {
    static get $javaClass(): any;
    constructor();
}
