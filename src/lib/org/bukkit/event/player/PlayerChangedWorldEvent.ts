declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface PlayerChangedWorldEvent extends PlayerEvent {
	getEventName(): string;
	getFrom(): World;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerChangedWorldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedWorldEvent');
	}

	constructor(player: Player, from: World);
	constructor(...args: any[]) {
		return new PlayerChangedWorldEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChangedWorldEvent.$javaClass.getHandlerList(...args);
	}

}

