import Block from '../../../../org/bukkit/block/Block.js';
import BlockFormEvent from '../../../../org/bukkit/event/block/BlockFormEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockSpreadEvent extends BlockFormEvent {
    getHandlers(): HandlerList;
    getSource(): Block;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewState(): BlockState;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockSpreadEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
