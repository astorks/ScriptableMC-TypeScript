declare var Java: any;
import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js'
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Projectile from '../../../../org/bukkit/entity/Projectile.js'
import ProjectileHitEvent from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'
import ThrownPotion from '../../../../org/bukkit/entity/ThrownPotion.js'

export default interface LingeringPotionSplashEvent extends ProjectileHitEvent, Cancellable {
	getAreaEffectCloud(): AreaEffectCloud;
	getEntity(): Entity;
	getEntity(): Projectile;
	getEntity(): ThrownPotion;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class LingeringPotionSplashEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.LingeringPotionSplashEvent');
	}

	constructor(potion: ThrownPotion, entity: AreaEffectCloud);
	constructor(...args: any[]) {
		return new LingeringPotionSplashEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return LingeringPotionSplashEvent.$javaClass.getHandlerList(...args);
	}

}

