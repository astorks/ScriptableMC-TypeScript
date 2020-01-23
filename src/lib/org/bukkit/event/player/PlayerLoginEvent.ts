declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerLoginEvent$Result} from '../../../../org/bukkit/event/player/PlayerLoginEvent$Result.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerLoginEvent extends PlayerEvent {
	getAddress(): any;
	getHandlers(): HandlerList;
	getResult(): PlayerLoginEvent$Result;
	setResult(result: PlayerLoginEvent$Result): void;
	getHostname(): string;
	getKickMessage(): string;
	allow(): void;
	setKickMessage(message: string): void;
	disallow(result: PlayerLoginEvent$Result, message: string): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent');
	}
	constructor(player: Player, hostname: string, address: any, result: PlayerLoginEvent$Result, message: string);
	constructor(player: Player, hostname: string, address: any);
	constructor(...args: any[]) {
		return new PlayerLoginEvent.$javaClass(...args);
	}
}

