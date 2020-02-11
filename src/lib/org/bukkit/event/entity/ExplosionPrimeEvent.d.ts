import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Explosive from '../../../../org/bukkit/entity/Explosive.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getRadius(): number;
    setRadius(radius: number): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getFire(): boolean;
    setFire(fire: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ExplosionPrimeEvent {
    static get $javaClass(): any;
    constructor(explosive: Explosive);
    constructor(what: Entity, radius: number, fire: boolean);
    static getHandlerList(): HandlerList;
}
