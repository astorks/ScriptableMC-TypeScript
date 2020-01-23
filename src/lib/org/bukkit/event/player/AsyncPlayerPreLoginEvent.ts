declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {PlayerPreLoginEvent$Result} from '../../../../org/bukkit/event/player/PlayerPreLoginEvent$Result.js'
import {AsyncPlayerPreLoginEvent$Result} from '../../../../org/bukkit/event/player/AsyncPlayerPreLoginEvent$Result.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface AsyncPlayerPreLoginEvent extends Event {
	getName(): string;
	getAddress(): any;
	getHandlers(): HandlerList;
	getResult(): PlayerPreLoginEvent$Result;
	setResult(result: PlayerPreLoginEvent$Result): void;
	getUniqueId(): string;
	getKickMessage(): string;
	allow(): void;
	setKickMessage(message: string): void;
	disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
	disallow(result: PlayerPreLoginEvent$Result, message: string): void;
	setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
	getLoginResult(): AsyncPlayerPreLoginEvent$Result;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class AsyncPlayerPreLoginEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent');
	}
	constructor(_name: string, ipAddress: any, uniqueId: string);
	constructor(_name: string, ipAddress: any);
	constructor(...args: any[]) {
		return new AsyncPlayerPreLoginEvent.$javaClass(...args);
	}
}

