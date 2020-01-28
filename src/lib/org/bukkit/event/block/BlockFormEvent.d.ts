import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockGrowEvent } from '../../../../org/bukkit/event/block/BlockGrowEvent.js';
export interface BlockFormEvent extends BlockGrowEvent {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewState(): BlockState;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockFormEvent {
    static get $javaClass(): any;
    constructor(block: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
