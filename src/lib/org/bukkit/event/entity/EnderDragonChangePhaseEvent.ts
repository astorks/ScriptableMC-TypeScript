declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import EnderDragon from '../../../../org/bukkit/entity/EnderDragon.js'
import EnderDragon$Phase from '../../../../org/bukkit/entity/EnderDragon$Phase.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EnderDragonChangePhaseEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): EnderDragon;
	setCancelled(cancel: boolean): void;
	setNewPhase(newPhase: EnderDragon$Phase): void;
	getCurrentPhase(): EnderDragon$Phase;
	getNewPhase(): EnderDragon$Phase;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EnderDragonChangePhaseEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EnderDragonChangePhaseEvent');
	}
	constructor(enderDragon: EnderDragon, currentPhase: EnderDragon$Phase, newPhase: EnderDragon$Phase);
	constructor(...args: any[]) {
		return new EnderDragonChangePhaseEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EnderDragonChangePhaseEvent.$javaClass.getHandlerList(...args);
	}
}

