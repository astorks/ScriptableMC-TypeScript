declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerShearEntityEvent extends PlayerEvent, Cancellable {
	getEntity(): Entity;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerShearEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerShearEntityEvent');
	}

	constructor(who: Player, what: Entity);
	constructor(...args: any[]) {
		return new PlayerShearEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerShearEntityEvent.$javaClass.getHandlerList(...args);
	}

}

