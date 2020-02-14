declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerQuitEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getQuitMessage(): string;
	isAsynchronous(): boolean;
	setQuitMessage(quitMessage: string): void;
}

export default class PlayerQuitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerQuitEvent');
	}

	constructor(who: Player, quitMessage: string);
	constructor(...args: any[]) {
		return new PlayerQuitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerQuitEvent.$javaClass.getHandlerList(...args);
	}

}

