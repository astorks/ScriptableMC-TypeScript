declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockDamageEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getInstaBreak(): boolean;
	getItemInHand(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setInstaBreak(bool: boolean): void;
}

export default class BlockDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDamageEvent');
	}

	constructor(player: Player, block: Block, itemInHand: ItemStack, instaBreak: boolean);
	constructor(...args: any[]) {
		return new BlockDamageEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockDamageEvent.$javaClass.getHandlerList(...args);
	}

}

