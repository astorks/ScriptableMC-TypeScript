import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { AbstractHorse } from '../../../../org/bukkit/entity/AbstractHorse.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface HorseJumpEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): AbstractHorse;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setPower(power: number): void;
    getPower(): number;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class HorseJumpEvent {
    static get $javaClass(): any;
    constructor(horse: AbstractHorse, power: number);
    static getHandlerList(): HandlerList;
}
