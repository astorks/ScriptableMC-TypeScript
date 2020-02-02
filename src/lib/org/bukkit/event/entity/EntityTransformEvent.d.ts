import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityTransformEvent$TransformReason from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityTransformEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getTransformedEntity(): Entity;
    getTransformedEntities(): any;
    getTransformReason(): EntityTransformEvent$TransformReason;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityTransformEvent {
    static get $javaClass(): any;
    constructor(original: Entity, convertedList: any, transformReason: EntityTransformEvent$TransformReason);
    static getHandlerList(): HandlerList;
}
