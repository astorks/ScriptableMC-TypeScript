import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { BlockFormEvent } from '../../../../org/bukkit/event/block/BlockFormEvent.js';
export interface BlockSpreadEvent extends BlockFormEvent {
    getHandlers(): HandlerList;
    getSource(): Block;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewState(): BlockState;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockSpreadEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
