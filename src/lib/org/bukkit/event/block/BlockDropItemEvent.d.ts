import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockDropItemEvent extends BlockEvent, Cancellable {
    getPlayer(): Player;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBlockState(): BlockState;
    getItems(): Array<Item>;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockDropItemEvent {
    static get $javaClass(): any;
    constructor(block: Block, blockState: BlockState, player: Player, items: Array<any>);
    static getHandlerList(): HandlerList;
}
