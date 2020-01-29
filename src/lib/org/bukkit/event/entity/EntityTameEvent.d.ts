import { AnimalTamer } from '../../../../org/bukkit/entity/AnimalTamer.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityTameEvent extends EntityEvent, Cancellable {
    getOwner(): AnimalTamer;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityTameEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, owner: AnimalTamer);
    static getHandlerList(): HandlerList;
}
