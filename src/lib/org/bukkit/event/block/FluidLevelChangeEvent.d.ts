import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
    getNewData(): BlockData;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    setNewData(newData: BlockData): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FluidLevelChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, newData: BlockData);
    static getHandlerList(): HandlerList;
}
