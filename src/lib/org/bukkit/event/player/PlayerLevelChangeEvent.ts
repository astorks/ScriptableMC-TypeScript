declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerLevelChangeEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewLevel(): number;
	getOldLevel(): number;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerLevelChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLevelChangeEvent');
	}

	constructor(player: Player, oldLevel: number, newLevel: number);
	constructor(...args: any[]) {
		return new PlayerLevelChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerLevelChangeEvent.$javaClass.getHandlerList(...args);
	}

}

