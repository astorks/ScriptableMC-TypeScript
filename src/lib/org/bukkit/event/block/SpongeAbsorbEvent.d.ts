import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlocks(): Array<BlockState>;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class SpongeAbsorbEvent {
    static get $javaClass(): any;
    constructor(block: Block, waterblocks: Array<any>);
    static getHandlerList(): HandlerList;
}
