declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {EquipmentSlot} from '../../../../org/bukkit/inventory/EquipmentSlot.js'
import {BlockState} from '../../../../org/bukkit/block/BlockState.js'
import {BlockPlaceEvent} from '../../../../org/bukkit/event/block/BlockPlaceEvent.js'

export interface BlockMultiPlaceEvent extends BlockPlaceEvent {
	getReplacedBlockStates(): any;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getItemInHand(): ItemStack;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	canBuild(): boolean;
	getBlockPlaced(): Block;
	setBuild(canBuild: boolean): void;
	getHand(): EquipmentSlot;
	getBlockAgainst(): Block;
	getBlockReplacedState(): BlockState;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockMultiPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockMultiPlaceEvent');
	}
	constructor(states: any, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
	constructor(...args: any[]) {
		return new BlockMultiPlaceEvent.$javaClass(...args);
	}
}

