declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EnderDragon} from '../../../../org/bukkit/entity/EnderDragon.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EnderDragon$Phase} from '../../../../org/bukkit/entity/EnderDragon$Phase.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): EnderDragon;
	getEntity(): Entity;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setNewPhase(newPhase: EnderDragon$Phase): void;
	getNewPhase(): EnderDragon$Phase;
	getCurrentPhase(): EnderDragon$Phase;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EnderDragonChangePhaseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EnderDragonChangePhaseEvent');
	}
	constructor(enderDragon: EnderDragon, currentPhase: EnderDragon$Phase, newPhase: EnderDragon$Phase);
	constructor(...args: any[]) {
		return new EnderDragonChangePhaseEvent.$javaClass(...args);
	}
}

