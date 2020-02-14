declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getNewData(): BlockData;
	setCancelled(cancelled: boolean): void;
	setNewData(newData: BlockData): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class FluidLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.FluidLevelChangeEvent');
	}
	constructor(theBlock: Block, newData: BlockData);
	constructor(...args: any[]) {
		return new FluidLevelChangeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FluidLevelChangeEvent.$javaClass.getHandlerList(...args);
	}
}

