declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {PigZombie} from '../../../../org/bukkit/entity/PigZombie.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface PigZombieAngerEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): PigZombie;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setNewAnger(newAnger: number): void;
	getNewAnger(): number;
	getTarget(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PigZombieAngerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PigZombieAngerEvent');
	}
	constructor(pigZombie: PigZombie, target: Entity, newAnger: number);
	constructor(...args: any[]) {
		return new PigZombieAngerEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PigZombieAngerEvent.$javaClass.getHandlerList(...args);
	}
}

