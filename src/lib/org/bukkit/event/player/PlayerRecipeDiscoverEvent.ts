declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {NamespacedKey} from '../../../../org/bukkit/NamespacedKey.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerRecipeDiscoverEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getRecipe(): NamespacedKey;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerRecipeDiscoverEvent {
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

