import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityEvent extends Event {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityEvent {
    static get $javaClass(): any;
    constructor(what: Entity);
}