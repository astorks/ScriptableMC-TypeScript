declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockData} from '../../../../org/bukkit/block/data/BlockData.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getNewData(): BlockData;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	setNewData(newData: BlockData): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class FluidLevelChangeEvent {
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
