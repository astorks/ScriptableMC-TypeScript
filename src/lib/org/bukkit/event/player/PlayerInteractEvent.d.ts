import Action from '../../../../org/bukkit/event/block/Action.js';
import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerInteractEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAction(): Action;
    getHand(): EquipmentSlot;
    getBlockFace(): BlockFace;
    useInteractedBlock(): Event$Result;
    setUseInteractedBlock(useInteractedBlock: Event$Result): void;
    hasItem(): boolean;
    hasBlock(): boolean;
    isBlockInHand(): boolean;
    getClickedBlock(): Block;
    setUseItemInHand(useItemInHand: Event$Result): void;
    useItemInHand(): Event$Result;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerInteractEvent {
    static get $javaClass(): any;
    constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace);
    constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
