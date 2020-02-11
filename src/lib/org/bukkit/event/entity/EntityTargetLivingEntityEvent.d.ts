import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTargetEvent from '../../../../org/bukkit/event/entity/EntityTargetEvent.js';
import EntityTargetEvent$TargetReason from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
    getTarget(): Entity;
    getTarget(): LivingEntity;
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
export default class EntityTargetLivingEntityEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, target: LivingEntity, reason: EntityTargetEvent$TargetReason);
    static getHandlerList(): HandlerList;
}
