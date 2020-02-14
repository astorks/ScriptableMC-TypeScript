declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'
import Vector from '../../../../org/bukkit/util/Vector.js'

export default interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getVelocity(): Vector;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setVelocity(velocity: Vector): void;
}

export default class PlayerVelocityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerVelocityEvent');
	}

	constructor(player: Player, velocity: Vector);
	constructor(...args: any[]) {
		return new PlayerVelocityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerVelocityEvent.$javaClass.getHandlerList(...args);
	}

}

