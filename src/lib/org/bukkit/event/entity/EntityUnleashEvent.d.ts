import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityUnleashEvent$UnleashReason } from '../../../../org/bukkit/event/entity/EntityUnleashEvent$UnleashReason.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityUnleashEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getReason(): EntityUnleashEvent$UnleashReason;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityUnleashEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, reason: EntityUnleashEvent$UnleashReason);
    static getHandlerList(): HandlerList;
}
