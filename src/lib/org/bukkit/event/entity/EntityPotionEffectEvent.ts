declare var Java: any;
import {EntityPotionEffectEvent$Cause} from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Cause.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityPotionEffectEvent$Action} from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Action.js'
import {PotionEffect} from '../../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../../org/bukkit/potion/PotionEffectType.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
	getCause(): EntityPotionEffectEvent$Cause;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getAction(): EntityPotionEffectEvent$Action;
	getNewEffect(): PotionEffect;
	getModifiedType(): PotionEffectType;
	setOverride(override: boolean): void;
	isOverride(): boolean;
	getOldEffect(): PotionEffect;
	getEntity(): Entity;
	getEntityType(): EntityType;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class EntityPotionEffectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent');
	}
	constructor(livingEntity: LivingEntity, oldEffect: PotionEffect, newEffect: PotionEffect, cause: EntityPotionEffectEvent$Cause, action: EntityPotionEffectEvent$Action, override: boolean);
	constructor(...args: any[]) {
		return new EntityPotionEffectEvent.$javaClass(...args);
	}
}

