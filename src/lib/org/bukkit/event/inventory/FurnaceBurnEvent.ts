declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface FurnaceBurnEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setBurning(burning: boolean): void;
	getFuel(): ItemStack;
	isBurning(): boolean;
	getBurnTime(): number;
	setBurnTime(burnTime: number): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FurnaceBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceBurnEvent');
	}
	constructor(furnace: Block, fuel: ItemStack, burnTime: number);
	constructor(...args: any[]) {
		return new FurnaceBurnEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FurnaceBurnEvent.$javaClass.getHandlerList(...args);
	}
}

