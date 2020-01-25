declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityShootBowEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getBow(): ItemStack;
	getProjectile(): Entity;
	setProjectile(projectile: Entity): void;
	getForce(): number;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityShootBowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityShootBowEvent');
	}
	constructor(shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
	constructor(...args: any[]) {
		return new EntityShootBowEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityShootBowEvent.$javaClass.getHandlerList(...args);
	}
}

