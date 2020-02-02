import Block from '../../../../org/bukkit/block/Block.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityCombustEvent from '../../../../org/bukkit/event/entity/EntityCombustEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityCombustByBlockEvent extends EntityCombustEvent {
    getCombuster(): Block;
    getDuration(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setDuration(duration: number): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityCombustByBlockEvent {
    static get $javaClass(): any;
    constructor(combuster: Block, combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
