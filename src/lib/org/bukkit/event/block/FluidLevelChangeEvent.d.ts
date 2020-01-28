import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockData } from '../../../../org/bukkit/block/data/BlockData.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getNewData(): BlockData;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    setNewData(newData: BlockData): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class FluidLevelChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, newData: BlockData);
    static getHandlerList(): HandlerList;
}
