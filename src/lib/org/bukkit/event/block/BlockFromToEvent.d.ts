import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockFace } from '../../../../org/bukkit/block/BlockFace.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockFromToEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getFace(): BlockFace;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getToBlock(): Block;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockFromToEvent {
    static get $javaClass(): any;
    constructor(block: Block, toBlock: Block);
    constructor(block: Block, face: BlockFace);
    static getHandlerList(): HandlerList;
}
