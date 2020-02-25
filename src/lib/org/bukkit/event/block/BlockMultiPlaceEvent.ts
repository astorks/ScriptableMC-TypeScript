declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockPlaceEvent from '../../../../org/bukkit/event/block/BlockPlaceEvent.js'
import BlockState from '../../../../org/bukkit/block/BlockState.js'
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockMultiPlaceEvent extends BlockPlaceEvent {
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
	getReplacedBlockStates(): Array<BlockState>;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setBuild(canBuild: boolean): void;
	setCancelled(cancel: boolean): void;
}

export default class BlockMultiPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockMultiPlaceEvent');
	}

	constructor(states: Array<any>, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
	constructor(...args: any[]) {
		return new BlockMultiPlaceEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockMultiPlaceEvent.$javaClass.getHandlerList(...args);
	}

}

