declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockBurnEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getIgnitingBlock(): Block;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockBurnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBurnEvent');
	}

	constructor(block: Block);
	constructor(block: Block, ignitingBlock: Block);
	constructor(...args: any[]) {
		return new BlockBurnEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockBurnEvent.$javaClass.getHandlerList(...args);
	}

}

