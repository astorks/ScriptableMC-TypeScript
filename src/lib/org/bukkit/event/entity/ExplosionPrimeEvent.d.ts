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
    getRadius(): number;
    setRadius(radius: number): void;
    getFire(): boolean;
    setFire(fire: boolean): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ExplosionPrimeEvent {
    static get $javaClass(): any;
    constructor(what: Entity, radius: number, fire: boolean);
    constructor(explosive: Explosive);
    static getHandlerList(): HandlerList;
}
