import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { BlockPlaceEvent } from '../../../../org/bukkit/event/block/BlockPlaceEvent.js';
export interface BlockMultiPlaceEvent extends BlockPlaceEvent {
    getReplacedBlockStates(): any;
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
export declare class BlockMultiPlaceEvent {
    static get $javaClass(): any;
    constructor(states: any, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
