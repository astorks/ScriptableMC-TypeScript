declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EnchantmentOffer} from '../../../../org/bukkit/enchantments/EnchantmentOffer.js'
import {Inventory} from '../../../../org/bukkit/inventory/Inventory.js'
import {InventoryView} from '../../../../org/bukkit/inventory/InventoryView.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {InventoryEvent} from '../../../../org/bukkit/event/inventory/InventoryEvent.js'

export interface PrepareItemEnchantEvent extends InventoryEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getEnchanter(): Player;
	getEnchantBlock(): Block;
	getOffers(): Array<EnchantmentOffer>;
	getExpLevelCostsOffered(): Array<number>;
	getEnchantmentBonus(): number;
	getInventory(): Inventory;
	getViewers(): any;
	getView(): InventoryView;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PrepareItemEnchantEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.enchantment.PrepareItemEnchantEvent');
	}
	constructor(enchanter: Player, view: InventoryView, table: Block, item: ItemStack, offers: Array<EnchantmentOffer>, bonus: number);
	constructor(...args: any[]) {
		return new PrepareItemEnchantEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PrepareItemEnchantEvent.$javaClass.getHandlerList(...args);
	}
}

