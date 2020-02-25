declare var Java: any;
import InventoryClickEvent from '../../../org/bukkit/event/inventory/InventoryClickEvent.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'

export default interface ClickableItem {
	getItem(): ItemStack;
	run(e: InventoryClickEvent): void;
}

export default class ClickableItem {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.ClickableItem');
	}

	public static empty(item: ItemStack): ClickableItem;
	public static empty(...args: any[]): any {
		return ClickableItem.$javaClass.empty(...args);
	}

	public static of(item: ItemStack, consumer: any): ClickableItem;
	public static of(...args: any[]): any {
		return ClickableItem.$javaClass.of(...args);
	}

}

