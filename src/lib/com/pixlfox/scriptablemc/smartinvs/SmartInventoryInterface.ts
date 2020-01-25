declare var Java: any;
import {SmartItemBuilder} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'
import {SmartInventory$Builder} from '../../../../fr/minuskube/inv/SmartInventory$Builder.js'
import {SmartInventoryProvider} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryProvider.js'

export interface SmartInventoryInterface {
	itemBuilder(itemStack: ItemStack): SmartItemBuilder;
	clickableItem(item: ItemStack): ClickableItem;
	clickableItem(item: ItemStack, consumer: any): ClickableItem;
	builder(): SmartInventory$Builder;
	provider(scriptableObject: any): SmartInventoryProvider;
}

export class SmartInventoryInterface {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.smartinvs.SmartInventoryInterface');
	}
	constructor();
	constructor(...args: any[]) {
		return new SmartInventoryInterface.$javaClass(...args);
	}
}

