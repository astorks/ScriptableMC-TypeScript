declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerMoveEvent} from '../../../../org/bukkit/event/player/PlayerMoveEvent.js'

export interface PlayerTeleportEvent extends PlayerMoveEvent {
	getHandlers(): HandlerList;
	getCause(): PlayerTeleportEvent$TeleportCause;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getTo(): Location;
	setTo(to: Location): void;
	getFrom(): Location;
	setFrom(from: Location): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerTeleportEvent {
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

