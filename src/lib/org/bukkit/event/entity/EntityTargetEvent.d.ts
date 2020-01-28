import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityTargetEvent$TargetReason } from '../../../../org/bukkit/event/entity/EntityTargetEvent$TargetReason.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityTargetEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getReason(): EntityTargetEvent$TargetReason;
    getTarget(): Entity;
    setTarget(target: Entity): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityTargetEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, target: Entity, reason: EntityTargetEvent$TargetReason);
    static getHandlerList(): HandlerList;
}
