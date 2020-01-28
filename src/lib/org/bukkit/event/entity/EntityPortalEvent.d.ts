import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityTeleportEvent } from '../../../../org/bukkit/event/entity/EntityTeleportEvent.js';
export interface EntityPortalEvent extends EntityTeleportEvent {
    getHandlers(): HandlerList;
    setSearchRadius(searchRadius: number): void;
    getSearchRadius(): number;
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
export declare class EntityPortalEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, from: Location, to: Location);
    constructor(entity: Entity, from: Location, to: Location, searchRadius: number);
    static getHandlerList(): HandlerList;
}
