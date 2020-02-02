import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getChangedType(): Material;
    getSourceBlock(): Block;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockPhysicsEvent {
    static get $javaClass(): any;
    constructor(block: Block, changed: BlockData);
    constructor(block: Block, changed: BlockData, sourceBlock: Block);
    static getHandlerList(): HandlerList;
}
