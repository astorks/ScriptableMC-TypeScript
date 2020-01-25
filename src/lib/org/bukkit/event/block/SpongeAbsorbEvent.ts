declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getBlocks(): any;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class SpongeAbsorbEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.SpongeAbsorbEvent');
	}
	constructor(block: Block, waterblocks: any);
	constructor(...args: any[]) {
		return new SpongeAbsorbEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SpongeAbsorbEvent.$javaClass.getHandlerList(...args);
	}
}

