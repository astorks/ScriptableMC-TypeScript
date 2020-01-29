import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BlockState } from '../../../../org/bukkit/block/BlockState.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockFormEvent } from '../../../../org/bukkit/event/block/BlockFormEvent.js';
export interface EntityBlockFormEvent extends BlockFormEvent {
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewState(): BlockState;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityBlockFormEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, block: Block, blockstate: BlockState);
    static getHandlerList(): HandlerList;
}
