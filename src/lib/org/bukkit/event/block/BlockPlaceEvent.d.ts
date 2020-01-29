import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockPlaceEvent extends BlockEvent, Cancellable {
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlockReplacedState(): BlockState;
    canBuild(): boolean;
    getBlockPlaced(): Block;
    getHand(): EquipmentSlot;
    getBlockAgainst(): Block;
    setBuild(canBuild: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockPlaceEvent {
    static get $javaClass(): any;
    constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean, hand: EquipmentSlot);
    constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
