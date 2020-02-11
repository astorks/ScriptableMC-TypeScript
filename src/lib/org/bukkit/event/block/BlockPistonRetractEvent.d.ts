import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BlockPistonEvent from '../../../../org/bukkit/event/block/BlockPistonEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface BlockPistonRetractEvent extends BlockPistonEvent {
    getHandlers(): HandlerList;
    getRetractLocation(): Location;
    getBlocks(): Array<Block>;
    getDirection(): BlockFace;
    isSticky(): boolean;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPistonRetractEvent {
    static get $javaClass(): any;
    constructor(block: Block, blocks: Array<any>, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
