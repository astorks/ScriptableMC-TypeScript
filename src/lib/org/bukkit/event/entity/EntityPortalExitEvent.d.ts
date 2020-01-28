import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vector } from '../../../../org/bukkit/util/Vector.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityTeleportEvent } from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js';
export interface EntityPortalExitEvent extends EntityTeleportEvent {
    getHandlers(): HandlerList;
    getBefore(): Vector;
    setAfter(after: Vector): void;
    getAfter(): Vector;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getTo(): Location;
    setTo(to: Location): void;
    getFrom(): Location;
    setFrom(from: Location): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityPortalExitEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, from: Location, to: Location, before: Vector, after: Vector);
    static getHandlerList(): HandlerList;
}
