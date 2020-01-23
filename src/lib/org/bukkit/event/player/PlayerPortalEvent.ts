declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerTeleportEvent} from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js'

export interface PlayerPortalEvent extends PlayerTeleportEvent {
	getHandlers(): HandlerList;
	getCanCreatePortal(): boolean;
	setCanCreatePortal(canCreatePortal: boolean): void;
	getCreationRadius(): number;
	setCreationRadius(creationRadius: number): void;
	getSearchRadius(): number;
	setSearchRadius(searchRadius: number): void;
	getCause(): PlayerTeleportEvent$TeleportCause;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getTo(): Location;
	setFrom(from: Location): void;
	getFrom(): Location;
	setTo(to: Location): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerPortalEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPortalEvent');
	}
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
	constructor(player: Player, from: Location, to: Location);
	constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause, getSearchRadius: number, canCreatePortal: boolean, creationRadius: number);
	constructor(...args: any[]) {
		return new PlayerPortalEvent.$javaClass(...args);
	}
}

