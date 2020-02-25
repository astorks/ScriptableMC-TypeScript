declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerAnimationType from '../../../../org/bukkit/event/player/PlayerAnimationType.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
	getAnimationType(): PlayerAnimationType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerAnimationEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
	}

	constructor(player: Player);
	constructor(...args: any[]) {
		return new PlayerAnimationEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerAnimationEvent.$javaClass.getHandlerList(...args);
	}

}

