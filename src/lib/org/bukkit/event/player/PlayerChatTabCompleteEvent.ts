declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerChatTabCompleteEvent extends PlayerEvent {
	getChatMessage(): string;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLastToken(): string;
	getPlayer(): Player;
	getTabCompletions(): any;
	isAsynchronous(): boolean;
}

export default class PlayerChatTabCompleteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChatTabCompleteEvent');
	}

	constructor(who: Player, message: string, completions: any);
	constructor(...args: any[]) {
		return new PlayerChatTabCompleteEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChatTabCompleteEvent.$javaClass.getHandlerList(...args);
	}

}

