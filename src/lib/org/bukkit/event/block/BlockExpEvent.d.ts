import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockExpEvent extends BlockEvent {
    getHandlers(): HandlerList;
    getExpToDrop(): number;
    setExpToDrop(exp: number): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockExpEvent {
    static get $javaClass(): any;
    constructor(block: Block, exp: number);
    static getHandlerList(): HandlerList;
}
