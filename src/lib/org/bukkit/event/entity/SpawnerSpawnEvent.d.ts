import CreatureSpawner from '../../../../org/bukkit/block/CreatureSpawner.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntitySpawnEvent from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface SpawnerSpawnEvent extends EntitySpawnEvent {
    getSpawner(): CreatureSpawner;
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class SpawnerSpawnEvent {
    static get $javaClass(): any;
    constructor(spawnee: Entity, spawner: CreatureSpawner);
    static getHandlerList(): HandlerList;
}
