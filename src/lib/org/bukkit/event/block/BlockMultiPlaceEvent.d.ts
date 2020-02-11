import Block from '../../../../org/bukkit/block/Block.js';
import BlockPlaceEvent from '../../../../org/bukkit/event/block/BlockPlaceEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockMultiPlaceEvent extends BlockPlaceEvent {
    getReplacedBlockStates(): Array<BlockState>;
    getHandlers(): HandlerList;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    getBlockPlaced(): Block;
    setBuild(canBuild: boolean): void;
    getBlockAgainst(): Block;
    getHand(): EquipmentSlot;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    canBuild(): boolean;
    getBlockReplacedState(): BlockState;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockMultiPlaceEvent {
    static get $javaClass(): any;
    constructor(states: Array<any>, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
