declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockExplodeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	blockList(): any;
	setYield(_yield: number): void;
	getYield(): number;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockExplodeEvent');
	}
	constructor(what: Block, blocks: any, _yield: number);
	constructor(...args: any[]) {
		return new BlockExplodeEvent.$javaClass(...args);
	}
}

