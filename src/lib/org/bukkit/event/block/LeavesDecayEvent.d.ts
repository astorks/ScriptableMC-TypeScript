import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface LeavesDecayEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class LeavesDecayEvent {
    static get $javaClass(): any;
    constructor(block: Block);
    static getHandlerList(): HandlerList;
}
