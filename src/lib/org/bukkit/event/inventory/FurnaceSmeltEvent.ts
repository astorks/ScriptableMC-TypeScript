declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockCookEvent} from '../../../../org/bukkit/event/block/BlockCookEvent.js'

export interface FurnaceSmeltEvent extends BlockCookEvent {
	getHandlers(): HandlerList;
	getSource(): ItemStack;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setResult(result: ItemStack): void;
	getResult(): ItemStack;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FurnaceSmeltEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceSmeltEvent');
	}
	constructor(furnace: Block, source: ItemStack, result: ItemStack);
	constructor(...args: any[]) {
		return new FurnaceSmeltEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FurnaceSmeltEvent.$javaClass.getHandlerList(...args);
	}
}

