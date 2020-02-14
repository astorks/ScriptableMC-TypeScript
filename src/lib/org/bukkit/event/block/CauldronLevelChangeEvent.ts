declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import CauldronLevelChangeEvent$ChangeReason from '../../../../org/bukkit/event/block/CauldronLevelChangeEvent$ChangeReason.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewLevel(): number;
	getOldLevel(): number;
	getReason(): CauldronLevelChangeEvent$ChangeReason;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	setNewLevel(newLevel: number): void;
}

export default class CauldronLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent');
	}

	constructor(block: Block, entity: Entity, reason: CauldronLevelChangeEvent$ChangeReason, oldLevel: number, newLevel: number);
	constructor(...args: any[]) {
		return new CauldronLevelChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return CauldronLevelChangeEvent.$javaClass.getHandlerList(...args);
	}

}

