declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Projectile from '../../../../org/bukkit/entity/Projectile.js'
import ProjectileHitEvent from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'
import ThrownPotion from '../../../../org/bukkit/entity/ThrownPotion.js'

export default interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): ThrownPotion;
	getEntity(): Projectile;
	setCancelled(cancel: boolean): void;
	getAffectedEntities(): any;
	getIntensity(entity: LivingEntity): number;
	setIntensity(entity: LivingEntity, intensity: number): void;
	getPotion(): ThrownPotion;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PotionSplashEvent {
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

