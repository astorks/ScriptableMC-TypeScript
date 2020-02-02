import Block from '../../../../org/bukkit/block/Block.js';
import BlockGrowEvent from '../../../../org/bukkit/event/block/BlockGrowEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockFormEvent extends BlockGrowEvent {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewState(): BlockState;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockFormEvent {
    static get $javaClass(): any;
    constructor(block: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
