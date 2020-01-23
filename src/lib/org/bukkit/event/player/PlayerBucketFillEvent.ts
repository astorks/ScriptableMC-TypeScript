declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerBucketEvent} from '../../../../org/bukkit/event/player/PlayerBucketEvent.js'

export interface PlayerBucketFillEvent extends PlayerBucketEvent {
	getHandlers(): HandlerList;
	getBlock(): Block;
	getItemStack(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setItemStack(itemStack: ItemStack): void;
	getBlockClicked(): Block;
	getBucket(): Material;
	getBlockFace(): BlockFace;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerBucketFillEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBucketFillEvent');
	}
	constructor(who: Player, block: Block, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
	constructor(who: Player, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
	constructor(...args: any[]) {
		return new PlayerBucketFillEvent.$javaClass(...args);
	}
}

