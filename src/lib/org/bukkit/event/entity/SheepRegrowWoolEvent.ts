declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Sheep from '../../../../org/bukkit/entity/Sheep.js'

export default interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
	getEntity(): Sheep;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class SheepRegrowWoolEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SheepRegrowWoolEvent');
	}

	constructor(sheep: Sheep);
	constructor(...args: any[]) {
		return new SheepRegrowWoolEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SheepRegrowWoolEvent.$javaClass.getHandlerList(...args);
	}

}

