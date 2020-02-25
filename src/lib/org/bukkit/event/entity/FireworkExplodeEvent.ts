declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import Firework from '../../../../org/bukkit/entity/Firework.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface FireworkExplodeEvent extends EntityEvent, Cancellable {
	getEntity(): Firework;
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class FireworkExplodeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.FireworkExplodeEvent');
	}

	constructor(what: Firework);
	constructor(...args: any[]) {
		return new FireworkExplodeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FireworkExplodeEvent.$javaClass.getHandlerList(...args);
	}

}

