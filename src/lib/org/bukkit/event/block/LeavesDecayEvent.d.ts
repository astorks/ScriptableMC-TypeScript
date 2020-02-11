import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface LeavesDecayEvent extends BlockEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class LeavesDecayEvent {
    static get $javaClass(): any;
    constructor(block: Block);
    static getHandlerList(): HandlerList;
}
