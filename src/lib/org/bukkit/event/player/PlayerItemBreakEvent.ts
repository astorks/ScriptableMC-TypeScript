declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerItemBreakEvent extends PlayerEvent {
	getBrokenItem(): ItemStack;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerItemBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerItemBreakEvent');
	}

	constructor(player: Player, brokenItem: ItemStack);
	constructor(...args: any[]) {
		return new PlayerItemBreakEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerItemBreakEvent.$javaClass.getHandlerList(...args);
	}

}

