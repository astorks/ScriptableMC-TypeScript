declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntitySpawnEvent} from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'

export interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Projectile;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getHandlers(): HandlerList;
	getLocation(): Location;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ProjectileLaunchEvent {
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

