declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockRedstoneEvent extends BlockEvent {
	getHandlers(): HandlerList;
	setNewCurrent(newCurrent: number): void;
	getOldCurrent(): number;
	getNewCurrent(): number;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockRedstoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockRedstoneEvent');
	}
	constructor(block: Block, oldCurrent: number, newCurrent: number);
	constructor(...args: any[]) {
		return new BlockRedstoneEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockRedstoneEvent.$javaClass.getHandlerList(...args);
	}
}

