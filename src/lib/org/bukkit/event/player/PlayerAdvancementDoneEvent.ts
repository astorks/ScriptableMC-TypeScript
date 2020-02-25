declare var Java: any;
import Advancement from '../../../../org/bukkit/advancement/Advancement.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerAdvancementDoneEvent extends PlayerEvent {
	getAdvancement(): Advancement;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerAdvancementDoneEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAdvancementDoneEvent');
	}

	constructor(who: Player, advancement: Advancement);
	constructor(...args: any[]) {
		return new PlayerAdvancementDoneEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerAdvancementDoneEvent.$javaClass.getHandlerList(...args);
	}

}

