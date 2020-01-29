import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { PigZombie } from '../../../../org/bukkit/entity/PigZombie.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface PigZombieAngerEvent extends EntityEvent, Cancellable {
    getTarget(): Entity;
    getEntity(): Entity;
    getEntity(): PigZombie;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setNewAnger(newAnger: number): void;
    getNewAnger(): number;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PigZombieAngerEvent {
    static get $javaClass(): any;
    constructor(pigZombie: PigZombie, target: Entity, newAnger: number);
    static getHandlerList(): HandlerList;
}
