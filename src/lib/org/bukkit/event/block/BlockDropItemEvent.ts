declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Item from '../../../../org/bukkit/entity/Item.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockDropItemEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getBlockState(): BlockState;
	getEventName(): string;
	getHandlers(): HandlerList;
	getItems(): Array<Item>;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockDropItemEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDropItemEvent');
	}

	constructor(block: Block, blockState: BlockState, player: Player, items: Array<any>);
	constructor(...args: any[]) {
		return new BlockDropItemEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockDropItemEvent.$javaClass.getHandlerList(...args);
	}

}

