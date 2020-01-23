declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockRedstoneEvent extends BlockEvent {
	getHandlers(): HandlerList;
	setNewCurrent(newCurrent: number): void;
	getNewCurrent(): number;
	getOldCurrent(): number;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockRedstoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockRedstoneEvent');
	}
	constructor(block: Block, oldCurrent: number, newCurrent: number);
	constructor(...args: any[]) {
		return new BlockRedstoneEvent.$javaClass(...args);
	}
}

