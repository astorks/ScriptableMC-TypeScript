import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockRedstoneEvent extends BlockEvent {
    getHandlers(): HandlerList;
    getNewCurrent(): number;
    getOldCurrent(): number;
    setNewCurrent(newCurrent: number): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockRedstoneEvent {
    static get $javaClass(): any;
    constructor(block: Block, oldCurrent: number, newCurrent: number);
    static getHandlerList(): HandlerList;
}
