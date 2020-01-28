import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockPlaceEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    canBuild(): boolean;
    getBlockPlaced(): Block;
    getBlockReplacedState(): BlockState;
    getBlockAgainst(): Block;
    getHand(): EquipmentSlot;
    setBuild(canBuild: boolean): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockPlaceEvent {
    static get $javaClass(): any;
    constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
