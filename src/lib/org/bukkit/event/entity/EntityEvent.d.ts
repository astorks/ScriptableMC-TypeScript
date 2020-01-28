import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface EntityEvent extends Event {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityEvent {
    static get $javaClass(): any;
    constructor(what: Entity);
}
