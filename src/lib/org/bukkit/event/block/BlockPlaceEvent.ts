declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockPlaceEvent extends BlockEvent, Cancellable {
	canBuild(): boolean;
	getBlock(): Block;
	getBlockAgainst(): Block;
	getBlockPlaced(): Block;
	getBlockReplacedState(): BlockState;
	getEventName(): string;
	getHand(): EquipmentSlot;
	getHandlers(): HandlerList;
	getItemInHand(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setBuild(canBuild: boolean): void;
	setCancelled(cancel: boolean): void;
}

export default class BlockPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockPlaceEvent');
	}

	constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
	constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean, hand: EquipmentSlot);
	constructor(...args: any[]) {
		return new BlockPlaceEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockPlaceEvent.$javaClass.getHandlerList(...args);
	}

}

