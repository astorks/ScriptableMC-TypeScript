declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isFlying(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerToggleFlightEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleFlightEvent');
	}

	constructor(player: Player, isFlying: boolean);
	constructor(...args: any[]) {
		return new PlayerToggleFlightEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerToggleFlightEvent.$javaClass.getHandlerList(...args);
	}

}

