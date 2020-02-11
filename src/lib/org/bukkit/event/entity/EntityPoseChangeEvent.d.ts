import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Pose from '../../../../org/bukkit/entity/Pose.js';
export default interface EntityPoseChangeEvent extends EntityEvent {
    getPose(): Pose;
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityPoseChangeEvent {
    static get $javaClass(): any;
    constructor(who: Entity, pose: Pose);
    static getHandlerList(): HandlerList;
}
