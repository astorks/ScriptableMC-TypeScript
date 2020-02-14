declare var Java: any;
import BookMeta from '../../../../org/bukkit/inventory/meta/BookMeta.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewBookMeta(): BookMeta;
	getPlayer(): Player;
	getPreviousBookMeta(): BookMeta;
	getSlot(): number;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isSigning(): boolean;
	setCancelled(cancel: boolean): void;
	setNewBookMeta(newBookMeta: BookMeta): void;
	setSigning(signing: boolean): void;
}

export default class PlayerEditBookEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEditBookEvent');
	}

	constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
	constructor(...args: any[]) {
		return new PlayerEditBookEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerEditBookEvent.$javaClass.getHandlerList(...args);
	}

}

