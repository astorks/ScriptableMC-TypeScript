declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	setMessage(command: string): void;
	getRecipients(): any;
	setPlayer(player: Player): void;
	getMessage(): string;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class PlayerCommandPreprocessEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');
	}
	constructor(player: Player, message: string);
	constructor(player: Player, message: string, recipients: any);
	constructor(...args: any[]) {
		return new PlayerCommandPreprocessEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerCommandPreprocessEvent.$javaClass.getHandlerList(...args);
	}
}

