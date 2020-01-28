import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockData } from '../../../../org/bukkit/block/data/BlockData.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityChangeBlockEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getBlock(): Block;
    getBlockData(): BlockData;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getTo(): Material;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityChangeBlockEvent {
    static get $javaClass(): any;
    constructor(what: Entity, block: Block, to: BlockData);
    static getHandlerList(): HandlerList;
}
