import { EntityPotionEffectEvent$Cause } from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Cause.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityPotionEffectEvent$Action } from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Action.js';
import { PotionEffect } from '../../../../org/bukkit/potion/PotionEffect.js';
import { PotionEffectType } from '../../../../org/bukkit/potion/PotionEffectType.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
    getCause(): EntityPotionEffectEvent$Cause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAction(): EntityPotionEffectEvent$Action;
    getNewEffect(): PotionEffect;
    setOverride(override: boolean): void;
    getOldEffect(): PotionEffect;
    getModifiedType(): PotionEffectType;
    isOverride(): boolean;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityPotionEffectEvent {
    static get $javaClass(): any;
    constructor(livingEntity: LivingEntity, oldEffect: PotionEffect, newEffect: PotionEffect, cause: EntityPotionEffectEvent$Cause, action: EntityPotionEffectEvent$Action, override: boolean);
    static getHandlerList(): HandlerList;
}
