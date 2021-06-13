declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityShootBowEvent extends EntityEvent, Cancellable {
	getBow(): ItemStack;
	getConsumable(): ItemStack;
	getEntity(): LivingEntity;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getForce(): number;
	getHand(): EquipmentSlot;
	getHandlers(): HandlerList;
	getProjectile(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setConsumeItem(consumeItem: boolean): void;
	setProjectile(projectile: Entity): void;
	shouldConsumeItem(): boolean;
}

export default class EntityShootBowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityShootBowEvent');
	}

	constructor(shooter: LivingEntity, bow: ItemStack, consumable: ItemStack, projectile: Entity, hand: EquipmentSlot, force: number, consumeItem: boolean);
	constructor(...args: any[]) {
		return new EntityShootBowEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityShootBowEvent.$javaClass.getHandlerList(...args);
	}

}

