import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockExplodeEvent extends BlockEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getYield(): number;
    blockList(): Array<Block>;
    setYield(_yield: number): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Block, blocks: Array<any>, _yield: number);
    static getHandlerList(): HandlerList;
}
