import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Action } from '../../../../org/bukkit/event/block/Action.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerInteractEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAction(): Action;
    getHand(): EquipmentSlot;
    getBlockFace(): BlockFace;
    useItemInHand(): Event$Result;
    useInteractedBlock(): Event$Result;
    setUseInteractedBlock(useInteractedBlock: Event$Result): void;
    setUseItemInHand(useItemInHand: Event$Result): void;
    hasItem(): boolean;
    hasBlock(): boolean;
    isBlockInHand(): boolean;
    getClickedBlock(): Block;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerInteractEvent {
    static get $javaClass(): any;
    constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace);
    constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
