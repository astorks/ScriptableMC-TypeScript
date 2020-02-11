import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTeleportEvent from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface EntityPortalExitEvent extends EntityTeleportEvent {
    getHandlers(): HandlerList;
    setAfter(after: Vector): void;
    getAfter(): Vector;
    getBefore(): Vector;
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
export default class EntityPortalExitEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, from: Location, to: Location, before: Vector, after: Vector);
    static getHandlerList(): HandlerList;
}
