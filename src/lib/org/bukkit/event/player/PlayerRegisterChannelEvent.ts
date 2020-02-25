declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerChannelEvent from '../../../../org/bukkit/event/player/PlayerChannelEvent.js'

export default interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
	getChannel(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerRegisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRegisterChannelEvent');
	}

	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerRegisterChannelEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerRegisterChannelEvent.$javaClass.getHandlerList(...args);
	}

}

