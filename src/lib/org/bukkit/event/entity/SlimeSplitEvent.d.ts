import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Slime } from '../../../../org/bukkit/entity/Slime.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface SlimeSplitEvent extends EntityEvent, Cancellable {
    getCount(): number;
    getEntity(): Entity;
    getEntity(): Slime;
    getHandlers(): HandlerList;
    setCount(count: number): void;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class SlimeSplitEvent {
    static get $javaClass(): any;
    constructor(slime: Slime, count: number);
    static getHandlerList(): HandlerList;
}
