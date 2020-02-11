import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityTransformEvent$TransformReason from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityTransformEvent extends EntityEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getTransformReason(): EntityTransformEvent$TransformReason;
    getTransformedEntity(): Entity;
    getTransformedEntities(): Array<Entity>;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityTransformEvent {
    static get $javaClass(): any;
    constructor(original: Entity, convertedList: Array<any>, transformReason: EntityTransformEvent$TransformReason);
    static getHandlerList(): HandlerList;
}