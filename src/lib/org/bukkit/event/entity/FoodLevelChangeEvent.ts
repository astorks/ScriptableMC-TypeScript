declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): HumanEntity;
	getEntityType(): EntityType;
	getEventName(): string;
	getFoodLevel(): number;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFoodLevel(level: number): void;
}

export default class FoodLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FoodLevelChangeEvent');
	}

	constructor(what: HumanEntity, level: number);
	constructor(what: HumanEntity, level: number, item: ItemStack);
	constructor(...args: any[]) {
		return new FoodLevelChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FoodLevelChangeEvent.$javaClass.getHandlerList(...args);
	}

}

