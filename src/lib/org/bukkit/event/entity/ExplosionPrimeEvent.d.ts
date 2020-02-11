import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Explosive from '../../../../org/bukkit/entity/Explosive.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFire(fire: boolean): void;
    getFire(): boolean;
    setRadius(radius: number): void;
    getRadius(): number;
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
