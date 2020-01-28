import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityRegainHealthEvent$RegainReason } from '../../../../org/bukkit/event/entity/EntityRegainHealthEvent$RegainReason.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getAmount(): number;
    setAmount(amount: number): void;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getRegainReason(): EntityRegainHealthEvent$RegainReason;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityRegainHealthEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, amount: number, regainReason: EntityRegainHealthEvent$RegainReason);
    static getHandlerList(): HandlerList;
}
