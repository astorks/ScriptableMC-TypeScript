declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import PlayerPreLoginEvent$Result from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js'

export default interface PlayerPreLoginEvent extends Event {
	getHandlers(): HandlerList;
	getUniqueId(): string;
	setResult(result: PlayerPreLoginEvent$Result): void;
	getKickMessage(): string;
	setKickMessage(message: string): void;
	allow(): void;
	disallow(result: PlayerPreLoginEvent$Result, message: string): void;
	getAddress(): any;
	getName(): string;
	getResult(): PlayerPreLoginEvent$Result;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerPreLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPreLoginEvent');
	}
	constructor(_name: string, ipAddress: any, uniqueId: string);
	constructor(_name: string, ipAddress: any);
	constructor(...args: any[]) {
		return new PlayerPreLoginEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerPreLoginEvent.$javaClass.getHandlerList(...args);
	}
}

