declare var Java: any;
import AbstractVillager from '../../../../org/bukkit/entity/AbstractVillager.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import MerchantRecipe from '../../../../org/bukkit/inventory/MerchantRecipe.js'

export default interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	getEntity(): AbstractVillager;
	getEntity(): Entity;
	getRecipe(): MerchantRecipe;
	setRecipe(recipe: MerchantRecipe): void;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class VillagerAcquireTradeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.VillagerAcquireTradeEvent');
	}
	constructor(what: AbstractVillager, recipe: MerchantRecipe);
	constructor(...args: any[]) {
		return new VillagerAcquireTradeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return VillagerAcquireTradeEvent.$javaClass.getHandlerList(...args);
	}
}

