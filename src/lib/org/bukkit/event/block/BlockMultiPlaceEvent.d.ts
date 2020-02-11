import Block from '../../../../org/bukkit/block/Block.js';
import BlockPlaceEvent from '../../../../org/bukkit/event/block/BlockPlaceEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockMultiPlaceEvent extends BlockPlaceEvent {
    getReplacedBlockStates(): Array<BlockState>;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBlockReplacedState(): BlockState;
    canBuild(): boolean;
    getBlockPlaced(): Block;
    getBlockAgainst(): Block;
    setBuild(canBuild: boolean): void;
    getHand(): EquipmentSlot;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockMultiPlaceEvent {
    static get $javaClass(): any;
    constructor(states: Array<any>, clicked: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
