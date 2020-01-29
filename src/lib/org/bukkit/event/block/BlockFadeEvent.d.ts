import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockFadeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewState(): BlockState;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockFadeEvent {
    static get $javaClass(): any;
    constructor(block: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
