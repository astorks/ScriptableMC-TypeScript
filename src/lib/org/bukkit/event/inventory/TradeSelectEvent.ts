declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {MerchantInventory} from '../../../../org/bukkit/inventory/MerchantInventory.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {Merchant} from '../../../../org/bukkit/inventory/Merchant.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {HumanEntity} from '../../../../org/bukkit/entity/HumanEntity.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {InventoryInteractEvent} from '../../../../org/bukkit/event/inventory/InventoryInteractEvent.js'

export interface TradeSelectEvent extends InventoryInteractEvent {
	getIndex(): number;
	getHandlers(): HandlerList;
	getInventory(): MerchantInventory;
	getInventory(): Inventory;
	getMerchant(): Merchant;
	isCancelled(): boolean;
	setCancelled(toCancel: boolean): void;
	setResult(newResult: Event$Result): void;
	getWhoClicked(): HumanEntity;
	getResult(): Event$Result;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class TradeSelectEvent {
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

