declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import PigZombie from '../../../../org/bukkit/entity/PigZombie.js'

export default interface PigZombieAngerEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): PigZombie;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewAnger(): number;
	getTarget(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setNewAnger(newAnger: number): void;
}

export default class PigZombieAngerEvent {
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

