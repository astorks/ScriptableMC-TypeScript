declare var Java: any;
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockExpEvent} from '../../../../org/bukkit/event/block/BlockExpEvent.js'

export interface BlockBreakEvent extends BlockExpEvent, Cancellable {
	getPlayer(): Player;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	isDropItems(): boolean;
	setDropItems(dropItems: boolean): void;
	getHandlers(): HandlerList;
	setExpToDrop(exp: number): void;
	getExpToDrop(): number;
	getBlock(): Block;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BlockBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockBreakEvent');
	}
	constructor(theBlock: Block, player: Player);
	constructor(...args: any[]) {
		return new BlockBreakEvent.$javaClass(...args);
	}
}

