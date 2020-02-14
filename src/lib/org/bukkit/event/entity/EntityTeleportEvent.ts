declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface EntityTeleportEvent extends EntityEvent, Cancellable {
	getFrom(): Location;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getTo(): Location;
	setFrom(from: Location): void;
	setTo(to: Location): void;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class EntityTeleportEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTeleportEvent');
	}
	constructor(what: Entity, from: Location, to: Location);
	constructor(...args: any[]) {
		return new EntityTeleportEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityTeleportEvent.$javaClass.getHandlerList(...args);
	}
}

