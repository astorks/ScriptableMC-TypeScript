import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockPistonEvent extends BlockEvent, Cancellable {
    getDirection(): BlockFace;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    isSticky(): boolean;
    getBlock(): Block;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPistonEvent {
    static get $javaClass(): any;
    constructor(block: Block, direction: BlockFace);
}
