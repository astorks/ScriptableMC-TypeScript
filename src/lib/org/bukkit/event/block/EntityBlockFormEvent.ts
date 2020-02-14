declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFormEvent from '../../../../org/bukkit/event/block/BlockFormEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityBlockFormEvent extends BlockFormEvent {
	getBlock(): Block;
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewState(): BlockState;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntityBlockFormEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.EntityBlockFormEvent');
	}

	constructor(entity: Entity, block: Block, blockstate: BlockState);
	constructor(...args: any[]) {
		return new EntityBlockFormEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityBlockFormEvent.$javaClass.getHandlerList(...args);
	}

}

