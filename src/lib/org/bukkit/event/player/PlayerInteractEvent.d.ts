import { Material } from '../../../../org/bukkit/Material.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event$Result } from '../../../../org/bukkit/event/Event$Result.js';
import { Action } from '../../../../org/bukkit/event/block/Action.js';
import { EquipmentSlot } from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerInteractEvent extends PlayerEvent, Cancellable {
    getMaterial(): Material;
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setUseInteractedBlock(useInteractedBlock: Event$Result): void;
    getAction(): Action;
    getHand(): EquipmentSlot;
    getBlockFace(): BlockFace;
    hasItem(): boolean;
    useInteractedBlock(): Event$Result;
    setUseItemInHand(useItemInHand: Event$Result): void;
    getClickedBlock(): Block;
    isBlockInHand(): boolean;
    hasBlock(): boolean;
    useItemInHand(): Event$Result;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerInteractEvent {
    static get $javaClass(): any;
    constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace, hand: EquipmentSlot);
    constructor(who: Player, action: Action, item: ItemStack, clickedBlock: Block, clickedFace: BlockFace);
    static getHandlerList(): HandlerList;
}
