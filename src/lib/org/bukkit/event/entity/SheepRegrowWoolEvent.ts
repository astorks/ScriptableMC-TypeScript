declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Sheep} from '../../../../org/bukkit/entity/Sheep.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {EntityEvent} from '../../../../org/bukkit/event/entity/EntityEvent.js'

export interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
	getHandlers(): HandlerList;
	getEntity(): Entity;
	getEntity(): Sheep;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class SheepRegrowWoolEvent {
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

