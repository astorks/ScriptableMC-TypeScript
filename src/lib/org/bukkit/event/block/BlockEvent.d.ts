import Block from '../../../../org/bukkit/block/Block.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockEvent extends Event {
    getBlock(): Block;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block);
}
