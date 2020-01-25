declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ThrownPotion} from '../../../../org/bukkit/entity/ThrownPotion.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): ThrownPotion;
	getEntity(): Projectile;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getAffectedEntities(): any;
	getIntensity(entity: LivingEntity): number;
	getPotion(): ThrownPotion;
	setIntensity(entity: LivingEntity, intensity: number): void;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PotionSplashEvent');
	}
	constructor(potion: ThrownPotion, affectedEntities: any);
	constructor(...args: any[]) {
		return new PotionSplashEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PotionSplashEvent.$javaClass.getHandlerList(...args);
	}
}

