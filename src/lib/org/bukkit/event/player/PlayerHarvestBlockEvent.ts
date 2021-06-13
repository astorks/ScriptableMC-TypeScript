declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from './PlayerEvent.js'

export default interface PlayerHarvestBlockEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getHarvestedBlock(): Block;
	getItemsHarvested(): Array<ItemStack>;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerHarvestBlockEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerHarvestBlockEvent');
	}

	constructor(player: Player, harvestedBlock: Block, itemsHarvested: Array<any>);
	constructor(...args: any[]) {
		return new PlayerHarvestBlockEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerHarvestBlockEvent.$javaClass.getHandlerList(...args);
	}

}

