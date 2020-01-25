declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockFromToEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getFace(): BlockFace;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getToBlock(): Block;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockFromToEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFromToEvent');
	}
	constructor(block: Block, face: BlockFace);
	constructor(block: Block, toBlock: Block);
	constructor(...args: any[]) {
		return new BlockFromToEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockFromToEvent.$javaClass.getHandlerList(...args);
	}
}

