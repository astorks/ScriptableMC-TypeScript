import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import PigZombie from '../../../../org/bukkit/entity/PigZombie.js';
export default interface PigZombieAngerEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): PigZombie;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewAnger(): number;
    setNewAnger(newAnger: number): void;
    getTarget(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PigZombieAngerEvent {
    static get $javaClass(): any;
    constructor(pigZombie: PigZombie, target: Entity, newAnger: number);
    static getHandlerList(): HandlerList;
}
