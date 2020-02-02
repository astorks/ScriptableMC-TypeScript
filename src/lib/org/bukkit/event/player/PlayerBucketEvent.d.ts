import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerBucketEvent extends PlayerEvent, Cancellable {
    getBlock(): Block;
    getItemStack(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setItemStack(itemStack: ItemStack): void;
    getBlockFace(): BlockFace;
    getBucket(): Material;
    getBlockClicked(): Block;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerBucketEvent {
    static get $javaClass(): any;
    constructor(who: Player, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
    constructor(who: Player, block: Block, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
}
