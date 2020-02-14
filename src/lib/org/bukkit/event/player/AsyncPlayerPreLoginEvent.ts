declare var Java: any;
import AsyncPlayerPreLoginEvent$Result from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import PlayerPreLoginEvent$Result from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js'

export default interface AsyncPlayerPreLoginEvent extends Event {
	getHandlers(): HandlerList;
	getUniqueId(): string;
	setResult(result: PlayerPreLoginEvent$Result): void;
	getKickMessage(): string;
	setKickMessage(message: string): void;
	allow(): void;
	disallow(result: PlayerPreLoginEvent$Result, message: string): void;
	disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
	setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
	getLoginResult(): AsyncPlayerPreLoginEvent$Result;
	getAddress(): any;
	getName(): string;
	getResult(): PlayerPreLoginEvent$Result;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class AsyncPlayerPreLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent');
	}
	constructor(_name: string, ipAddress: any, uniqueId: string);
	constructor(_name: string, ipAddress: any);
	constructor(...args: any[]) {
		return new AsyncPlayerPreLoginEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return AsyncPlayerPreLoginEvent.$javaClass.getHandlerList(...args);
	}
}

