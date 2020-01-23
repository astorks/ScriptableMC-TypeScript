declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerRespawnEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	isBedSpawn(): boolean;
	setRespawnLocation(respawnLocation: Location): void;
	getRespawnLocation(): Location;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerRespawnEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRespawnEvent');
	}
	constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean);
	constructor(...args: any[]) {
		return new PlayerRespawnEvent.$javaClass(...args);
	}
}

