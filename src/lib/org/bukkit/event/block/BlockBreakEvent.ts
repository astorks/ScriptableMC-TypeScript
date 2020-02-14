declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockExpEvent from '../../../../org/bukkit/event/block/BlockExpEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockBreakEvent extends BlockExpEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getExpToDrop(): number;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isDropItems(): boolean;
	setCancelled(cancel: boolean): void;
	setDropItems(dropItems: boolean): void;
	setExpToDrop(exp: number): void;
}

export default class BlockBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBreakEvent');
	}

	constructor(theBlock: Block, player: Player);
	constructor(...args: any[]) {
		return new BlockBreakEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockBreakEvent.$javaClass.getHandlerList(...args);
	}

}

