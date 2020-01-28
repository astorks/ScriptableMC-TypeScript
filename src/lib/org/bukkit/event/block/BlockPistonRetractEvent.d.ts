import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockPistonEvent } from '../../../../org/bukkit/event/block/BlockPistonEvent.js';
export interface BlockPistonRetractEvent extends BlockPistonEvent {
    getHandlers(): HandlerList;
    getBlocks(): any;
    getRetractLocation(): Location;
    getDirection(): BlockFace;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    isSticky(): boolean;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockPistonRetractEvent {
    static get $javaClass(): any;
    constructor(block: Block, blocks: any, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
