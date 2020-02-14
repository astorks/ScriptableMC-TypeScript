declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntitySpawnEvent from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Projectile from '../../../../org/bukkit/entity/Projectile.js'

export default interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
	getEntity(): Projectile;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class ProjectileLaunchEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ProjectileLaunchEvent');
	}

	constructor(what: Entity);
	constructor(...args: any[]) {
		return new ProjectileLaunchEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ProjectileLaunchEvent.$javaClass.getHandlerList(...args);
	}

}

