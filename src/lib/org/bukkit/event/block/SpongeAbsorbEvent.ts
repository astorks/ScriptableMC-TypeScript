declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getBlocks(): Array<BlockState>;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class SpongeAbsorbEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.SpongeAbsorbEvent');
	}

	constructor(block: Block, waterblocks: Array<any>);
	constructor(...args: any[]) {
		return new SpongeAbsorbEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SpongeAbsorbEvent.$javaClass.getHandlerList(...args);
	}

}

