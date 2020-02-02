import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTeleportEvent from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface EntityPortalExitEvent extends EntityTeleportEvent {
    getHandlers(): HandlerList;
    setAfter(after: Vector): void;
    getBefore(): Vector;
    getAfter(): Vector;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getTo(): Location;
    getFrom(): Location;
    setFrom(from: Location): void;
    setTo(to: Location): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityPortalExitEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, from: Location, to: Location, before: Vector, after: Vector);
    static getHandlerList(): HandlerList;
}
