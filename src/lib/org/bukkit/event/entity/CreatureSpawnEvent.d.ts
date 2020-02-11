import CreatureSpawnEvent$SpawnReason from '../../../../org/bukkit/event/entity/CreatureSpawnEvent$SpawnReason.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntitySpawnEvent from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface CreatureSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getSpawnReason(): CreatureSpawnEvent$SpawnReason;
    getLocation(): Location;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class CreatureSpawnEvent {
    static get $javaClass(): any;
    constructor(spawnee: LivingEntity, spawnReason: CreatureSpawnEvent$SpawnReason);
    static getHandlerList(): HandlerList;
}
