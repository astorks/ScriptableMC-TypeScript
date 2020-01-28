import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockData } from '../../../../org/bukkit/block/data/BlockData.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getChangedType(): Material;
    getSourceBlock(): Block;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockPhysicsEvent {
    static get $javaClass(): any;
    constructor(block: Block, changed: BlockData);
    constructor(block: Block, changed: BlockData, sourceBlock: Block);
    static getHandlerList(): HandlerList;
}
