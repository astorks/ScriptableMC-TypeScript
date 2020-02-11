import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityCombustEvent from '../../../../org/bukkit/event/entity/EntityCombustEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityCombustByEntityEvent extends EntityCombustEvent {
    getCombuster(): Entity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    setDuration(duration: number): void;
    getHandlers(): HandlerList;
    getDuration(): number;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityCombustByEntityEvent {
    static get $javaClass(): any;
    constructor(combuster: Entity, combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
