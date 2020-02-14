declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface MoistureChangeEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class MoistureChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.MoistureChangeEvent');
	}

	constructor(block: Block, newState: BlockState);
	constructor(...args: any[]) {
		return new MoistureChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return MoistureChangeEvent.$javaClass.getHandlerList(...args);
	}

}

