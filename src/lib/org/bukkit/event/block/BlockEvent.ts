declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BlockEvent extends Event {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
}

export default class BlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockEvent');
	}

	constructor(theBlock: Block);
	constructor(...args: any[]) {
		return new BlockEvent.$javaClass(...args);
	}

}

