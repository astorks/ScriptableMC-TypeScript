declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Projectile from '../../../../org/bukkit/entity/Projectile.js'

export default interface ProjectileHitEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Projectile;
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

export default class ProjectileHitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.ProjectileHitEvent');
	}

	constructor(projectile: Projectile);
	constructor(projectile: Projectile, hitBlock: Block);
	constructor(projectile: Projectile, hitEntity: Entity);
	constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block);
	constructor(projectile: Projectile, hitEntity: Entity, hitBlock: Block, hitFace: BlockFace);
	constructor(...args: any[]) {
		return new ProjectileHitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ProjectileHitEvent.$javaClass.getHandlerList(...args);
	}

}

