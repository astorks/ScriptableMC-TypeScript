import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockPistonEvent extends BlockEvent, Cancellable {
    getDirection(): BlockFace;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    isSticky(): boolean;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class BlockPistonEvent {
    static get $javaClass(): any;
    constructor(block: Block, direction: BlockFace);
}
