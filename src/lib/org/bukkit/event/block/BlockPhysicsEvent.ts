declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface BlockPhysicsEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getChangedType(): Material;
	getEventName(): string;
	getHandlers(): HandlerList;
	getSourceBlock(): Block;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BlockPhysicsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPhysicsEvent');
	}

	constructor(block: Block, changed: BlockData);
	constructor(block: Block, changed: BlockData, sourceBlock: Block);
	constructor(...args: any[]) {
		return new BlockPhysicsEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPhysicsEvent.$javaClass.getHandlerList(...args);
	}

}

