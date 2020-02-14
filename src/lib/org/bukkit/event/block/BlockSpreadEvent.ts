declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFormEvent from '../../../../org/bukkit/event/block/BlockFormEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockSpreadEvent extends BlockFormEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	getSource(): Block;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockSpreadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockSpreadEvent');
	}

	constructor(block: Block, source: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new BlockSpreadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockSpreadEvent.$javaClass.getHandlerList(...args);
	}

}

