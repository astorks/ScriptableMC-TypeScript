import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Explosive } from '../../../../org/bukkit/entity/Explosive.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setRadius(radius: number): void;
    getRadius(): number;
    setFire(fire: boolean): void;
    getFire(): boolean;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ExplosionPrimeEvent {
    static get $javaClass(): any;
    constructor(what: Entity, radius: number, fire: boolean);
    constructor(explosive: Explosive);
    static getHandlerList(): HandlerList;
}
