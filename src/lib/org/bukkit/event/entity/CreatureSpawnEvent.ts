declare var Java: any;
import CreatureSpawnEvent$SpawnReason from '../../../../org/bukkit/event/entity/CreatureSpawnEvent$SpawnReason.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntitySpawnEvent from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface CreatureSpawnEvent extends EntitySpawnEvent {
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	getSpawnReason(): CreatureSpawnEvent$SpawnReason;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class CreatureSpawnEvent {
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

