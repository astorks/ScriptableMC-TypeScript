declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {CauldronLevelChangeEvent$ChangeReason} from '../../../../org/bukkit/event/block/CauldronLevelChangeEvent$ChangeReason.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	getReason(): CauldronLevelChangeEvent$ChangeReason;
	getOldLevel(): number;
	getNewLevel(): number;
	setNewLevel(newLevel: number): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class CauldronLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent');
	}
	constructor(block: Block, entity: Entity, reason: CauldronLevelChangeEvent$ChangeReason, oldLevel: number, newLevel: number);
	constructor(...args: any[]) {
		return new CauldronLevelChangeEvent.$javaClass(...args);
	}
}

