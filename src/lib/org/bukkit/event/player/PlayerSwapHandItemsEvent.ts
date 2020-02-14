declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getMainHandItem(): ItemStack;
	getOffHandItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setMainHandItem(mainHandItem: ItemStack): void;
	setOffHandItem(offHandItem: ItemStack): void;
}

export default class PlayerSwapHandItemsEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerSwapHandItemsEvent');
	}

	constructor(player: Player, mainHandItem: ItemStack, offHandItem: ItemStack);
	constructor(...args: any[]) {
		return new PlayerSwapHandItemsEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerSwapHandItemsEvent.$javaClass.getHandlerList(...args);
	}

}

