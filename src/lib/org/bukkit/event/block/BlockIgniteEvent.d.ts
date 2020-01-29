import { BlockIgniteEvent$IgniteCause } from '../../../../org/bukkit/event/block/BlockIgniteEvent$IgniteCause.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockIgniteEvent extends BlockEvent, Cancellable {
    getCause(): BlockIgniteEvent$IgniteCause;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getIgnitingBlock(): Block;
    getIgnitingEntity(): Entity;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockIgniteEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingBlock: Block);
    constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity);
    constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity, ignitingBlock: Block);
    static getHandlerList(): HandlerList;
}
