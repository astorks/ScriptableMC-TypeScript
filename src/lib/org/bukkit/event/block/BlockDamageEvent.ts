declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BlockDamageEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getItemInHand(): ItemStack;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setInstaBreak(bool: boolean): void;
	getInstaBreak(): boolean;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockDamageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDamageEvent');
	}
	constructor(player: Player, block: Block, itemInHand: ItemStack, instaBreak: boolean);
	constructor(...args: any[]) {
		return new BlockDamageEvent.$javaClass(...args);
	}
}

