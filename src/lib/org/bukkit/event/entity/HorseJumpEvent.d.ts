import AbstractHorse from '../../../../org/bukkit/entity/AbstractHorse.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface HorseJumpEvent extends EntityEvent, Cancellable {
    getEntity(): AbstractHorse;
    getEntity(): Entity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    setPower(power: number): void;
    getPower(): number;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class HorseJumpEvent {
    static get $javaClass(): any;
    constructor(horse: AbstractHorse, power: number);
    static getHandlerList(): HandlerList;
}
