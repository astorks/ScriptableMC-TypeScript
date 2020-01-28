import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityCombustEvent } from '../../../../org/bukkit/event/entity/EntityCombustEvent.js';
export interface EntityCombustByEntityEvent extends EntityCombustEvent {
    getCombuster(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    getDuration(): number;
    setCancelled(cancel: boolean): void;
    setDuration(duration: number): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityCombustByEntityEvent {
    static get $javaClass(): any;
    constructor(combuster: Entity, combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
