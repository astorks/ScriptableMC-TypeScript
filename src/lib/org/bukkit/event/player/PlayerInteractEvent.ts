declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Action} from '../../../../org/bukkit/event/block/Action.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerInteractEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getMaterial(): Material;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getItem(): ItemStack;
	getAction(): Action;
	getHand(): EquipmentSlot;
	getBlockFace(): BlockFace;
	getClickedBlock(): Block;
	hasItem(): boolean;
	useInteractedBlock(): Event$Result;
	useItemInHand(): Event$Result;
	hasBlock(): boolean;
	isBlockInHand(): boolean;
	setUseItemInHand(useItemInHand: Event$Result): void;
	setUseInteractedBlock(useInteractedBlock: Event$Result): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEvent');
	}
	constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace, hand: EquipmentSlot);
	constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace);
	constructor(...args: any[]) {
		return new PlayerInteractEvent.$javaClass(...args);
	}
}

