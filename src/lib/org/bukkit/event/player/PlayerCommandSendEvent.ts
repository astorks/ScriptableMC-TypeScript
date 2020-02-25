declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerCommandSendEvent extends PlayerEvent {
	getCommands(): any;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerCommandSendEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerCommandSendEvent');
	}

	constructor(player: Player, commands: any);
	constructor(...args: any[]) {
		return new PlayerCommandSendEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerCommandSendEvent.$javaClass.getHandlerList(...args);
	}

}

