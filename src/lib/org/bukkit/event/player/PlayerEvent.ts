declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface PlayerEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEvent');
	}

	constructor(who: Player);
	constructor(...args: any[]) {
		return new PlayerEvent.$javaClass(...args);
	}

}

