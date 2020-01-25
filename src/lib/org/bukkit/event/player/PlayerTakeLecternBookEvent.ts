declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Lectern} from '../../../../org/bukkit/block/Lectern.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getLectern(): Lectern;
	getBook(): ItemStack;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerTakeLecternBookEvent {
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

