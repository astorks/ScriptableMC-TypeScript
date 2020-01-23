declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Action} from '../../../../org/bukkit/event/block/Action.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerInteractEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getMaterial(): Material;
	getItem(): ItemStack;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getHand(): EquipmentSlot;
	setUseInteractedBlock(useInteractedBlock: Event$Result): void;
	setUseItemInHand(useItemInHand: Event$Result): void;
	useItemInHand(): Event$Result;
	hasItem(): boolean;
	isBlockInHand(): boolean;
	getClickedBlock(): Block;
	hasBlock(): boolean;
	useInteractedBlock(): Event$Result;
	getAction(): Action;
	getBlockFace(): BlockFace;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
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

