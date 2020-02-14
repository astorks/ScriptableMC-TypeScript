declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerTeleportEvent from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js'
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'

export default interface PlayerPortalEvent extends PlayerTeleportEvent {
	getCanCreatePortal(): boolean;
	getCause(): PlayerTeleportEvent$TeleportCause;
	getCreationRadius(): number;
	getEventName(): string;
	getFrom(): Location;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getSearchRadius(): number;
	getTo(): Location;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCanCreatePortal(canCreatePortal: boolean): void;
	setCancelled(cancel: boolean): void;
	setCreationRadius(creationRadius: number): void;
	setFrom(from: Location): void;
	setSearchRadius(searchRadius: number): void;
	setTo(to: Location): void;
}

export default class PlayerPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPortalEvent');
	}

	constructor(player: Player, from: Location, to: Location);
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause, getSearchRadius: number, canCreatePortal: boolean, creationRadius: number);
	constructor(...args: any[]) {
		return new PlayerPortalEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerPortalEvent.$javaClass.getHandlerList(...args);
	}

}

