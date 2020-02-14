declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockRedstoneEvent extends BlockEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewCurrent(): number;
	getOldCurrent(): number;
	isAsynchronous(): boolean;
	setNewCurrent(newCurrent: number): void;
}

export default class BlockRedstoneEvent {
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

