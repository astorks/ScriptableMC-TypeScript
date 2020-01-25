declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {InventoryClickEvent} from '../../../org/bukkit/event/inventory/InventoryClickEvent.js'

export interface ClickableItem {
	getItem(): ItemStack;
	run(e: InventoryClickEvent): void;
}

export class ClickableItem {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.ClickableItem');
	}
	public static of(item: ItemStack, consumer: any): ClickableItem;
	public static of(...args: any[]): any {
		return ClickableItem.$javaClass.of(...args);
	}
	public static empty(item: ItemStack): ClickableItem;
	public static empty(...args: any[]): any {
		return ClickableItem.$javaClass.empty(...args);
	}
}

