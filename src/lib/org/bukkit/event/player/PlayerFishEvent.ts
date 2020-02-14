declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import FishHook from '../../../../org/bukkit/entity/FishHook.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'
import PlayerFishEvent$State from '../../../../org/bukkit/event/player/PlayerFishEvent$State.js'

export default interface PlayerFishEvent extends PlayerEvent, Cancellable {
	getCaught(): Entity;
	getEventName(): string;
	getExpToDrop(): number;
	getHandlers(): HandlerList;
	getHook(): FishHook;
	getPlayer(): Player;
	getState(): PlayerFishEvent$State;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setExpToDrop(amount: number): void;
}

export default class PlayerFishEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerFishEvent');
	}

	constructor(player: Player, entity: Entity, hookEntity: FishHook, state: PlayerFishEvent$State);
	constructor(...args: any[]) {
		return new PlayerFishEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerFishEvent.$javaClass.getHandlerList(...args);
	}

}

