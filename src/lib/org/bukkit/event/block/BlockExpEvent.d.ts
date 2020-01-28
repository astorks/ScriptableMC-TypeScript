import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockExpEvent extends BlockEvent {
    getHandlers(): HandlerList;
    getExpToDrop(): number;
    setExpToDrop(exp: number): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockExpEvent {
    static get $javaClass(): any;
    constructor(block: Block, exp: number);
    static getHandlerList(): HandlerList;
}
