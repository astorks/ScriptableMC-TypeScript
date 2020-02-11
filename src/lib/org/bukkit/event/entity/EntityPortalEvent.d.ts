import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTeleportEvent from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface EntityPortalEvent extends EntityTeleportEvent {
    getHandlers(): HandlerList;
    setSearchRadius(searchRadius: number): void;
    getSearchRadius(): number;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getTo(): Location;
    setTo(to: Location): void;
    setFrom(from: Location): void;
    getFrom(): Location;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityPortalEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, from: Location, to: Location, searchRadius: number);
    constructor(entity: Entity, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}