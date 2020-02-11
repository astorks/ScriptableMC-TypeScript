import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BlockPistonEvent from '../../../../org/bukkit/event/block/BlockPistonEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface BlockPistonRetractEvent extends BlockPistonEvent {
    getHandlers(): HandlerList;
    getBlocks(): Array<Block>;
    getRetractLocation(): Location;
    getDirection(): BlockFace;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    isSticky(): boolean;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPistonRetractEvent {
    static get $javaClass(): any;
    constructor(block: Block, blocks: Array<any>, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
