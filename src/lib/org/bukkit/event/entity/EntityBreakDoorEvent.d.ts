import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityChangeBlockEvent from '../../../../org/bukkit/event/entity/EntityChangeBlockEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface EntityBreakDoorEvent extends EntityChangeBlockEvent {
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getBlock(): Block;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlockData(): BlockData;
    getTo(): Material;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityBreakDoorEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, targetBlock: Block);
    static getHandlerList(): HandlerList;
}
