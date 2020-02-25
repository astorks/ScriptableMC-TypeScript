declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface FurnaceBurnEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getBurnTime(): number;
	getEventName(): string;
	getFuel(): ItemStack;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isBurning(): boolean;
	isCancelled(): boolean;
	setBurnTime(burnTime: number): void;
	setBurning(burning: boolean): void;
	setCancelled(cancel: boolean): void;
}

export default class FurnaceBurnEvent {
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

