declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Lectern from '../../../../org/bukkit/block/Lectern.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
	getBook(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLectern(): Lectern;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerTakeLecternBookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerTakeLecternBookEvent');
	}

	constructor(who: Player, lectern: Lectern);
	constructor(...args: any[]) {
		return new PlayerTakeLecternBookEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerTakeLecternBookEvent.$javaClass.getHandlerList(...args);
	}

}

