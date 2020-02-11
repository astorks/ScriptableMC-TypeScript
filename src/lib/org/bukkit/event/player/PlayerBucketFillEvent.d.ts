import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerBucketEvent from '../../../../org/bukkit/event/player/PlayerBucketEvent.js';
export default interface PlayerBucketFillEvent extends PlayerBucketEvent {
    getHandlers(): HandlerList;
    getBlock(): Block;
    setItemStack(itemStack: ItemStack): void;
    getItemStack(): ItemStack;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getBlockFace(): BlockFace;
    getBlockClicked(): Block;
    getBucket(): Material;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerBucketFillEvent {
    static get $javaClass(): any;
    constructor(who: Player, block: Block, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
    constructor(who: Player, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
    static getHandlerList(): HandlerList;
}
