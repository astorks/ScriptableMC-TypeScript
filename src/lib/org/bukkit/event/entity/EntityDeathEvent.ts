declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface EntityDeathEvent extends EntityEvent {
	getHandlers(): HandlerList;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getDrops(): any;
	getDroppedExp(): number;
	setDroppedExp(exp: number): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class EntityDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDeathEvent');
	}
	constructor(entity: LivingEntity, drops: any);
	constructor(what: LivingEntity, drops: any, droppedExp: number);
	constructor(...args: any[]) {
		return new EntityDeathEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDeathEvent.$javaClass.getHandlerList(...args);
	}
}

