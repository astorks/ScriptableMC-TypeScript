declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import DyeColor from '../../../../org/bukkit/DyeColor.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Sheep from '../../../../org/bukkit/entity/Sheep.js'

export default interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
	getColor(): DyeColor;
	getEntity(): Sheep;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setColor(color: DyeColor): void;
}

export default class SheepDyeWoolEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.SheepDyeWoolEvent');
	}

	constructor(sheep: Sheep, color: DyeColor);
	constructor(...args: any[]) {
		return new SheepDyeWoolEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SheepDyeWoolEvent.$javaClass.getHandlerList(...args);
	}

}

