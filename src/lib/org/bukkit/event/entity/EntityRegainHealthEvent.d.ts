import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityRegainHealthEvent$RegainReason from '../../../../org/bukkit/event/entity/EntityRegainHealthEvent$RegainReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
    setAmount(amount: number): void;
    getAmount(): number;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getRegainReason(): EntityRegainHealthEvent$RegainReason;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityRegainHealthEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, amount: number, regainReason: EntityRegainHealthEvent$RegainReason);
    static getHandlerList(): HandlerList;
}
