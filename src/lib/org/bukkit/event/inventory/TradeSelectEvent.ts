declare var Java: any;
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import Inventory from '../../../../org/bukkit/inventory/Inventory.js'
import InventoryInteractEvent from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js'
import Merchant from '../../../../org/bukkit/inventory/Merchant.js'
import MerchantInventory from '../../../../org/bukkit/inventory/MerchantInventory.js'

export default interface TradeSelectEvent extends InventoryInteractEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getIndex(): number;
	getInventory(): Inventory;
	getInventory(): MerchantInventory;
	getMerchant(): Merchant;
	getResult(): Event$Result;
	getView(): InventoryView;
	getViewers(): Array<HumanEntity>;
	getWhoClicked(): HumanEntity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	setResult(newResult: Event$Result): void;
}

export default class TradeSelectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.TradeSelectEvent');
	}

	constructor(transaction: InventoryView, newIndex: number);
	constructor(...args: any[]) {
		return new TradeSelectEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return TradeSelectEvent.$javaClass.getHandlerList(...args);
	}

}

