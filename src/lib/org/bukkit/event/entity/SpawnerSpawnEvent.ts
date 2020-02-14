declare var Java: any;
import CreatureSpawner from '../../../../org/bukkit/block/CreatureSpawner.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntitySpawnEvent from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'

export default interface SpawnerSpawnEvent extends EntitySpawnEvent {
	getSpawner(): CreatureSpawner;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getLocation(): Location;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class SpawnerSpawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SpawnerSpawnEvent');
	}
	constructor(spawnee: Entity, spawner: CreatureSpawner);
	constructor(...args: any[]) {
		return new SpawnerSpawnEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SpawnerSpawnEvent.$javaClass.getHandlerList(...args);
	}
}

