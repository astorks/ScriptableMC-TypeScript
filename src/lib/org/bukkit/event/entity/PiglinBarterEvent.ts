declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Piglin from '../../../../org/bukkit/entity/Piglin.js'

export default interface PiglinBarterEvent extends EntityEvent, Cancellable {
	getEntity(): Piglin;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getInput(): ItemStack;
	getOutcome(): Array<ItemStack>;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PiglinBarterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PiglinBarterEvent');
	}

	constructor(what: Piglin, input: ItemStack, outcome: Array<any>);
	constructor(...args: any[]) {
		return new PiglinBarterEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PiglinBarterEvent.$javaClass.getHandlerList(...args);
	}

}

