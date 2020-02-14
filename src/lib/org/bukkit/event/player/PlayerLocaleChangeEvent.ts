declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerLocaleChangeEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocale(): string;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerLocaleChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLocaleChangeEvent');
	}

	constructor(who: Player, locale: string);
	constructor(...args: any[]) {
		return new PlayerLocaleChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerLocaleChangeEvent.$javaClass.getHandlerList(...args);
	}

}

