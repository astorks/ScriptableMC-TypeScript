declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockFertilizeEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getBlocks(): Array<BlockState>;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class BlockFertilizeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockFertilizeEvent');
	}

	constructor(theBlock: Block, player: Player, blocks: Array<any>);
	constructor(...args: any[]) {
		return new BlockFertilizeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockFertilizeEvent.$javaClass.getHandlerList(...args);
	}

}

