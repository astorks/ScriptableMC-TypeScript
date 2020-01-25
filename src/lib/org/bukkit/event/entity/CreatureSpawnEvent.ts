declare var Java: any;
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {CreatureSpawnEvent$SpawnReason} from '../../../../org/bukkit/event/entity/CreatureSpawnEvent$SpawnReason.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntitySpawnEvent} from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'

export interface CreatureSpawnEvent extends EntitySpawnEvent {
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getSpawnReason(): CreatureSpawnEvent$SpawnReason;
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getLocation(): Location;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class CreatureSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.CreatureSpawnEvent');
	}
	constructor(spawnee: LivingEntity, spawnReason: CreatureSpawnEvent$SpawnReason);
	constructor(...args: any[]) {
		return new CreatureSpawnEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return CreatureSpawnEvent.$javaClass.getHandlerList(...args);
	}
}

