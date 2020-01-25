declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityPotionEffectEvent$Action} from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Action.js'
import {PotionEffectType} from '../../../../org/bukkit/potion/PotionEffectType.js'
import {PotionEffect} from '../../../../org/bukkit/potion/PotionEffect.js'
import {EntityPotionEffectEvent$Cause} from '../../../../org/bukkit/event/entity/EntityPotionEffectEvent$Cause.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getAction(): EntityPotionEffectEvent$Action;
	getModifiedType(): PotionEffectType;
	isOverride(): boolean;
	setOverride(override: boolean): void;
	getNewEffect(): PotionEffect;
	getOldEffect(): PotionEffect;
	getCause(): EntityPotionEffectEvent$Cause;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityPotionEffectEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent');
	}
	constructor(livingEntity: LivingEntity, oldEffect: PotionEffect, newEffect: PotionEffect, cause: EntityPotionEffectEvent$Cause, action: EntityPotionEffectEvent$Action, override: boolean);
	constructor(...args: any[]) {
		return new EntityPotionEffectEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityPotionEffectEvent.$javaClass.getHandlerList(...args);
	}
}

