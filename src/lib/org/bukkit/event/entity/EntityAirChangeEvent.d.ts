import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityAirChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getAmount(): number;
    setAmount(amount: number): void;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityAirChangeEvent {
    static get $javaClass(): any;
    constructor(what: Entity, amount: number);
    static getHandlerList(): HandlerList;
}
