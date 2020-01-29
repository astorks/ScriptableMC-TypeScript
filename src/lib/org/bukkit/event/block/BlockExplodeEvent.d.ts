import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockExplodeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    blockList(): any;
    getYield(): number;
    setYield(_yield: number): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Block, blocks: any, _yield: number);
    static getHandlerList(): HandlerList;
}
