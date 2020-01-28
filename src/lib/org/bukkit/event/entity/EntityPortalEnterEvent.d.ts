import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityPortalEnterEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getLocation(): Location;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityPortalEnterEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, location: Location);
    static getHandlerList(): HandlerList;
}
