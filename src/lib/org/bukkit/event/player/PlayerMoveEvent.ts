declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerMoveEvent extends PlayerEvent, Cancellable {
	getFrom(): Location;
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	getTo(): Location;
	setFrom(from: Location): void;
	setTo(to: Location): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerMoveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerMoveEvent');
	}
	constructor(player: Player, from: Location, to: Location);
	constructor(...args: any[]) {
		return new PlayerMoveEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerMoveEvent.$javaClass.getHandlerList(...args);
	}
}

