import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlocks(): any;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class SpongeAbsorbEvent {
    static get $javaClass(): any;
    constructor(block: Block, waterblocks: any);
    static getHandlerList(): HandlerList;
}
