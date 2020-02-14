declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewSlot(): number;
	getPlayer(): Player;
	getPreviousSlot(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerItemHeldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemHeldEvent');
	}

	constructor(player: Player, previous: number, current: number);
	constructor(...args: any[]) {
		return new PlayerItemHeldEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemHeldEvent.$javaClass.getHandlerList(...args);
	}

}

