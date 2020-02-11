import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityTargetEvent$TargetReason from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityTargetEvent extends EntityEvent, Cancellable {
    getTarget(): Entity;
    setTarget(target: Entity): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getReason(): EntityTargetEvent$TargetReason;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityTargetEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, target: Entity, reason: EntityTargetEvent$TargetReason);
    static getHandlerList(): HandlerList;
}
