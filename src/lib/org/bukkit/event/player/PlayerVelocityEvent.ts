declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getVelocity(): Vector;
	setVelocity(velocity: Vector): void;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerVelocityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerVelocityEvent');
	}
	constructor(player: Player, velocity: Vector);
	constructor(...args: any[]) {
		return new PlayerVelocityEvent.$javaClass(...args);
	}
}

