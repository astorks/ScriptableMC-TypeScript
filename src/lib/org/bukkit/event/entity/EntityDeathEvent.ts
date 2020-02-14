declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityDeathEvent extends EntityEvent {
	getDroppedExp(): number;
	getDrops(): Array<ItemStack>;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	setDroppedExp(exp: number): void;
}

export default class EntityDeathEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDeathEvent');
	}

	constructor(entity: LivingEntity, drops: Array<any>);
	constructor(what: LivingEntity, drops: Array<any>, droppedExp: number);
	constructor(...args: any[]) {
		return new EntityDeathEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityDeathEvent.$javaClass.getHandlerList(...args);
	}

}

