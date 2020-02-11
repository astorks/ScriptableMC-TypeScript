import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityCombustEvent extends EntityEvent, Cancellable {
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
export default class EntityCombustEvent {
    static get $javaClass(): any;
    constructor(combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
