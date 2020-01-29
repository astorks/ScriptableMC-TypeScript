import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityCombustEvent } from '../../../../org/bukkit/event/entity/EntityCombustEvent.js';
export interface EntityCombustByEntityEvent extends EntityCombustEvent {
    getCombuster(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getDuration(): number;
    setDuration(duration: number): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityCombustByEntityEvent {
    static get $javaClass(): any;
    constructor(combuster: Entity, combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
