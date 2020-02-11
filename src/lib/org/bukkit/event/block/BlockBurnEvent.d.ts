import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockBurnEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getIgnitingBlock(): Block;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockBurnEvent {
    static get $javaClass(): any;
    constructor(block: Block, ignitingBlock: Block);
    constructor(block: Block);
    static getHandlerList(): HandlerList;
}
