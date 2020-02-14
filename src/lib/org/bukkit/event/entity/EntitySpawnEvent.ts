declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface EntitySpawnEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class EntitySpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntitySpawnEvent');
	}

	constructor(spawnee: Entity);
	constructor(...args: any[]) {
		return new EntitySpawnEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntitySpawnEvent.$javaClass.getHandlerList(...args);
	}

}

