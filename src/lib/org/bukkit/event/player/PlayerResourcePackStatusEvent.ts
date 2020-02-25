declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'
import PlayerResourcePackStatusEvent$Status from '../../../../org/bukkit/event/player/PlayerResourcePackStatusEvent$Status.js'

export default interface PlayerResourcePackStatusEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getStatus(): PlayerResourcePackStatusEvent$Status;
	isAsynchronous(): boolean;
}

export default class PlayerResourcePackStatusEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent');
	}

	constructor(who: Player, resourcePackStatus: PlayerResourcePackStatusEvent$Status);
	constructor(...args: any[]) {
		return new PlayerResourcePackStatusEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerResourcePackStatusEvent.$javaClass.getHandlerList(...args);
	}

}

