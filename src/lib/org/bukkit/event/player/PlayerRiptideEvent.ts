declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerRiptideEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerRiptideEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerRiptideEvent');
	}

	constructor(who: Player, item: ItemStack);
	constructor(...args: any[]) {
		return new PlayerRiptideEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerRiptideEvent.$javaClass.getHandlerList(...args);
	}

}

