declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerMoveEvent from '../../../../org/bukkit/event/player/PlayerMoveEvent.js'
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'

export default interface PlayerTeleportEvent extends PlayerMoveEvent {
	getCause(): PlayerTeleportEvent$TeleportCause;
	getEventName(): string;
	getFrom(): Location;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getTo(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFrom(from: Location): void;
	setTo(to: Location): void;
}

export default class PlayerTeleportEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTeleportEvent');
	}

	constructor(player: Player, from: Location, to: Location);
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
	constructor(...args: any[]) {
		return new PlayerTeleportEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerTeleportEvent.$javaClass.getHandlerList(...args);
	}

}

