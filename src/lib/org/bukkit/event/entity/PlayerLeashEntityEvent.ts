declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Entity} from '../../../../org/bukkit/entity/Entity.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface PlayerLeashEntityEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getEntity(): Entity;
	getLeashHolder(): Entity;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerLeashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.PlayerLeashEntityEvent');
	}
	constructor(what: Entity, leashHolder: Entity, leasher: Player);
	constructor(...args: any[]) {
		return new PlayerLeashEntityEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerLeashEntityEvent.$javaClass.getHandlerList(...args);
	}
}

