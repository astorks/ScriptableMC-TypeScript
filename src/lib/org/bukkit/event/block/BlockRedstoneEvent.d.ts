import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockRedstoneEvent extends BlockEvent {
    getHandlers(): HandlerList;
    getOldCurrent(): number;
    getNewCurrent(): number;
    setNewCurrent(newCurrent: number): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockRedstoneEvent {
    static get $javaClass(): any;
    constructor(block: Block, oldCurrent: number, newCurrent: number);
    static getHandlerList(): HandlerList;
}
