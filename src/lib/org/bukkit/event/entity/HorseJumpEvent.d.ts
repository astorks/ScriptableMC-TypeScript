import { AbstractHorse } from '../../../../org/bukkit/entity/AbstractHorse.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface HorseJumpEvent extends EntityEvent, Cancellable {
    getEntity(): AbstractHorse;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setPower(power: number): void;
    getPower(): number;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class HorseJumpEvent {
    static get $javaClass(): any;
    constructor(horse: AbstractHorse, power: number);
    static getHandlerList(): HandlerList;
}
