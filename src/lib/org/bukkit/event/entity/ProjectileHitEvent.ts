declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Projectile} from '../../../../org/bukkit/entity/Projectile.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface ProjectileHitEvent extends EntityEvent {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Projectile;
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ProjectileHitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ProjectileHitEvent');
	}
	constructor(projectile: Projectile, hitEntity: Entity);
	constructor(projectile: Projectile, hitBlock: Block);
	constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block);
	constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block, hitFace: BlockFace);
	constructor(projectile: Projectile);
	constructor(...args: any[]) {
		return new ProjectileHitEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ProjectileHitEvent.$javaClass.getHandlerList(...args);
	}
}

