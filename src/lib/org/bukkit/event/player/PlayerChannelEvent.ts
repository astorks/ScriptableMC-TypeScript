declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerChannelEvent extends PlayerEvent {
	getChannel(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChannelEvent');
	}

	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerChannelEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChannelEvent.$javaClass.getHandlerList(...args);
	}

}

