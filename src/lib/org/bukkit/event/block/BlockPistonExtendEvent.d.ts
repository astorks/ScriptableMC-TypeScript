import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BlockPistonEvent from '../../../../org/bukkit/event/block/BlockPistonEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockPistonExtendEvent extends BlockPistonEvent {
    getLength(): number;
    getHandlers(): HandlerList;
    getBlocks(): Array<Block>;
    getDirection(): BlockFace;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    isSticky(): boolean;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPistonExtendEvent {
    static get $javaClass(): any;
    constructor(block: Block, blocks: Array<any>, direction: BlockFace);
    constructor(block: Block, length: number, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
