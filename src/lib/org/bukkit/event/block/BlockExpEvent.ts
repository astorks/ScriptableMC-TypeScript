declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockExpEvent extends BlockEvent {
	getBlock(): Block;
	getEventName(): string;
	getExpToDrop(): number;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	setExpToDrop(exp: number): void;
}

export default class BlockExpEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockExpEvent');
	}

	constructor(block: Block, exp: number);
	constructor(...args: any[]) {
		return new BlockExpEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockExpEvent.$javaClass.getHandlerList(...args);
	}

}

