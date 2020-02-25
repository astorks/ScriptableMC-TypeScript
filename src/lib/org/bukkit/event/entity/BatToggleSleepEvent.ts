declare var Java: any;
import Bat from '../../../../org/bukkit/entity/Bat.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BatToggleSleepEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isAwake(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BatToggleSleepEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.BatToggleSleepEvent');
	}

	constructor(what: Bat, awake: boolean);
	constructor(...args: any[]) {
		return new BatToggleSleepEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BatToggleSleepEvent.$javaClass.getHandlerList(...args);
	}

}

