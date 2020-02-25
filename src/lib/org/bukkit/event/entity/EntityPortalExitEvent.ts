declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityTeleportEvent from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Vector from '../../../../org/bukkit/util/Vector.js'

export default interface EntityPortalExitEvent extends EntityTeleportEvent {
	getAfter(): Vector;
	getBefore(): Vector;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFrom(): Location;
	getHandlers(): HandlerList;
	getTo(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setAfter(after: Vector): void;
	setCancelled(cancel: boolean): void;
	setFrom(from: Location): void;
	setTo(to: Location): void;
}

export default class EntityPortalExitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPortalExitEvent');
	}

	constructor(entity: Entity, from: Location, to: Location, before: Vector, after: Vector);
	constructor(...args: any[]) {
		return new EntityPortalExitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPortalExitEvent.$javaClass.getHandlerList(...args);
	}

}

