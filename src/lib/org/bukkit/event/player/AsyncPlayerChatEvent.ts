declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getFormat(): string;
	getHandlers(): HandlerList;
	getMessage(): string;
	getPlayer(): Player;
	getRecipients(): any;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setFormat(format: string): void;
	setMessage(message: string): void;
}

export default class AsyncPlayerChatEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerChatEvent');
	}

	constructor(async: boolean, who: Player, message: string, players: any);
	constructor(...args: any[]) {
		return new AsyncPlayerChatEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return AsyncPlayerChatEvent.$javaClass.getHandlerList(...args);
	}

}

