import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { BlockPlaceEvent } from '../../../../org/bukkit/event/block/BlockPlaceEvent.js';
export interface BlockMultiPlaceEvent extends BlockPlaceEvent {
    getReplacedBlockStates(): any;
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
export declare class BlockMultiPlaceEvent {
    static get $javaClass(): any;
    constructor(states: any, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
