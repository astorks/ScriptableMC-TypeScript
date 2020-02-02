import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BlockPistonEvent from '../../../../org/bukkit/event/block/BlockPistonEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockPistonExtendEvent extends BlockPistonEvent {
    getHandlers(): HandlerList;
    getBlocks(): Array<Block>;
    getLength(): number;
    getDirection(): BlockFace;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    isSticky(): boolean;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPistonExtendEvent {
    static get $javaClass(): any;
    constructor(block: Block, length: number, direction: BlockFace);
    constructor(block: Block, blocks: Array<any>, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
