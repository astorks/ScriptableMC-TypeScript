import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityTeleportEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFrom(): Location;
    getTo(): Location;
    setFrom(from: Location): void;
    setTo(to: Location): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityTeleportEvent {
    static get $javaClass(): any;
    constructor(what: Entity, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}
