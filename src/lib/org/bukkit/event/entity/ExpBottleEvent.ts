declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ThrownExpBottle} from '../../../../org/bukkit/entity/ThrownExpBottle.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {ProjectileHitEvent} from '../../../../org/bukkit/event/entity/ProjectileHitEvent.js'

export interface ExpBottleEvent extends ProjectileHitEvent {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): ThrownExpBottle;
	getEntity(): Projectile;
	setExperience(exp: number): void;
	getExperience(): number;
	setShowEffect(showEffect: boolean): void;
	getShowEffect(): boolean;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ExpBottleEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ExpBottleEvent');
	}
	constructor(bottle: ThrownExpBottle, exp: number);
	constructor(...args: any[]) {
		return new ExpBottleEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ExpBottleEvent.$javaClass.getHandlerList(...args);
	}
}

