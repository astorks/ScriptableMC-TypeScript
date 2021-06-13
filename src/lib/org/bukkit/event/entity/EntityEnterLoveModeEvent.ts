declare var Java: any;
import Animals from '../../../../org/bukkit/entity/Animals.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js'

export default interface EntityEnterLoveModeEvent extends EntityEvent, Cancellable {
	getEntity(): Animals;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getHumanEntity(): HumanEntity;
	getTicksInLove(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setTicksInLove(ticksInLove: number): void;
}

export default class EntityEnterLoveModeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityEnterLoveModeEvent');
	}

	constructor(animalInLove: Animals, humanEntity: HumanEntity, ticksInLove: number);
	constructor(...args: any[]) {
		return new EntityEnterLoveModeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntityEnterLoveModeEvent.$javaClass.getHandlerList(...args);
	}

}

