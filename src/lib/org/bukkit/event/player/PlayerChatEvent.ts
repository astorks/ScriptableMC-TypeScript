declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerChatEvent extends PlayerEvent, Cancellable {
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
	setPlayer(player: Player): void;
}

export default class PlayerChatEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChatEvent');
	}

	constructor(player: Player, message: string);
	constructor(player: Player, message: string, format: string, recipients: any);
	constructor(...args: any[]) {
		return new PlayerChatEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChatEvent.$javaClass.getHandlerList(...args);
	}

}

