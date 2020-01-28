import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityAirChangeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getAmount(): number;
    setAmount(amount: number): void;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityAirChangeEvent {
    static get $javaClass(): any;
    constructor(what: Entity, amount: number);
    static getHandlerList(): HandlerList;
}
