import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityToggleGlideEvent extends EntityEvent, Cancellable {
    isGliding(): boolean;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityToggleGlideEvent {
    static get $javaClass(): any;
    constructor(who: LivingEntity, isGliding: boolean);
    static getHandlerList(): HandlerList;
}
