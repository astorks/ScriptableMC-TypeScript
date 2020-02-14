declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface EntityAirChangeEvent extends EntityEvent, Cancellable {
	getAmount(): number;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setAmount(amount: number): void;
	setCancelled(cancelled: boolean): void;
}

export default class EntityAirChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityAirChangeEvent');
	}

	constructor(what: Entity, amount: number);
	constructor(...args: any[]) {
		return new EntityAirChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityAirChangeEvent.$javaClass.getHandlerList(...args);
	}

}

