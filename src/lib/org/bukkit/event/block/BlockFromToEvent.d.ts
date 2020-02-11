import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockFromToEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getFace(): BlockFace;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getToBlock(): Block;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockFromToEvent {
    static get $javaClass(): any;
    constructor(block: Block, toBlock: Block);
    constructor(block: Block, face: BlockFace);
    static getHandlerList(): HandlerList;
}
