declare var Java: any;
import Action from '../../../../org/bukkit/event/block/Action.js'
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import Event$Result from '../../../../org/bukkit/event/Event$Result.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../../org/bukkit/Material.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerInteractEvent extends PlayerEvent, Cancellable {
	getAction(): Action;
	getBlockFace(): BlockFace;
	getClickedBlock(): Block;
	getEventName(): string;
	getHand(): EquipmentSlot;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getMaterial(): Material;
	getPlayer(): Player;
	hasBlock(): boolean;
	hasItem(): boolean;
	isAsynchronous(): boolean;
	isBlockInHand(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setUseInteractedBlock(useInteractedBlock: Event$Result): void;
	setUseItemInHand(useItemInHand: Event$Result): void;
	useInteractedBlock(): Event$Result;
	useItemInHand(): Event$Result;
}

export default class PlayerInteractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerInteractEvent');
	}

	constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace);
	constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace, hand: EquipmentSlot);
	constructor(...args: any[]) {
		return new PlayerInteractEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerInteractEvent.$javaClass.getHandlerList(...args);
	}

}

