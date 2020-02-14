declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'
import PlayerLoginEvent$Result from '../../../../org/bukkit/event/player/PlayerLoginEvent$Result.js'

export default interface PlayerLoginEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	setResult(result: PlayerLoginEvent$Result): void;
	getKickMessage(): string;
	setKickMessage(message: string): void;
	allow(): void;
	disallow(result: PlayerLoginEvent$Result, message: string): void;
	getHostname(): string;
	getRealAddress(): any;
	getAddress(): any;
	getResult(): PlayerLoginEvent$Result;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent');
	}
	constructor(player: Player, hostname: string, address: any, realAddress: any);
	constructor(player: Player, hostname: string, address: any, result: PlayerLoginEvent$Result, message: string, realAddress: any);
	constructor(player: Player, hostname: string, address: any);
	constructor(...args: any[]) {
		return new PlayerLoginEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerLoginEvent.$javaClass.getHandlerList(...args);
	}
}

