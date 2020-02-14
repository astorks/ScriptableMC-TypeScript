declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'

export default interface EntityBreedEvent extends EntityEvent, Cancellable {
	getBredWith(): ItemStack;
	getBreeder(): LivingEntity;
	getEntity(): Entity;
	getEntity(): LivingEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getExperience(): number;
	getFather(): LivingEntity;
	getHandlers(): HandlerList;
	getMother(): LivingEntity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setExperience(experience: number): void;
}

export default class EntityBreedEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityBreedEvent');
	}

	constructor(child: LivingEntity, mother: LivingEntity, father: LivingEntity, breeder: LivingEntity, bredWith: ItemStack, experience: number);
	constructor(...args: any[]) {
		return new EntityBreedEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityBreedEvent.$javaClass.getHandlerList(...args);
	}

}

