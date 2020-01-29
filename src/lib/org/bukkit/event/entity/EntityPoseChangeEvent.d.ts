import { Pose } from '../../../../org/bukkit/entity/Pose.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityPoseChangeEvent extends EntityEvent {
    getPose(): Pose;
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityPoseChangeEvent {
    static get $javaClass(): any;
    constructor(who: Entity, pose: Pose);
    static getHandlerList(): HandlerList;
}
