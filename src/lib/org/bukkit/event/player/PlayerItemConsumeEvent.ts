declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	setItem(item: ItemStack): void;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerItemConsumeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemConsumeEvent');
	}
	constructor(player: Player, item: ItemStack);
	constructor(...args: any[]) {
		return new PlayerItemConsumeEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemConsumeEvent.$javaClass.getHandlerList(...args);
	}
}

