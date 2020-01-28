import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockPistonEvent } from '../../../../org/bukkit/event/block/BlockPistonEvent.js';
export interface BlockPistonExtendEvent extends BlockPistonEvent {
    getHandlers(): HandlerList;
    getBlocks(): any;
    getLength(): number;
    getDirection(): BlockFace;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    isSticky(): boolean;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockPistonExtendEvent {
    static get $javaClass(): any;
    constructor(block: Block, length: number, direction: BlockFace);
    constructor(block: Block, blocks: any, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
