import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerBucketEvent } from '../../../../org/bukkit/event/player/PlayerBucketEvent.js';
export interface PlayerBucketFillEvent extends PlayerBucketEvent {
    getHandlers(): HandlerList;
    getBlock(): Block;
    getItemStack(): ItemStack;
    setItemStack(itemStack: ItemStack): void;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlockFace(): BlockFace;
    getBlockClicked(): Block;
    getBucket(): Material;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerBucketFillEvent {
    static get $javaClass(): any;
    constructor(who: Player, block: Block, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
    constructor(who: Player, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
    static getHandlerList(): HandlerList;
}
