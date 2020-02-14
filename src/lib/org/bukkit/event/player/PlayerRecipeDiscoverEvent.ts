declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import NamespacedKey from '../../../../org/bukkit/NamespacedKey.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getRecipe(): NamespacedKey;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerRecipeDiscoverEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRecipeDiscoverEvent');
	}

	constructor(who: Player, recipe: NamespacedKey);
	constructor(...args: any[]) {
		return new PlayerRecipeDiscoverEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerRecipeDiscoverEvent.$javaClass.getHandlerList(...args);
	}

}

