import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getSourceBlock(): Block;
    getChangedType(): Material;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPhysicsEvent {
    static get $javaClass(): any;
    constructor(block: Block, changed: BlockData, sourceBlock: Block);
    constructor(block: Block, changed: BlockData);
    static getHandlerList(): HandlerList;
}