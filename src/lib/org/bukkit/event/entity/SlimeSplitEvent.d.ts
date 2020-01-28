import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Slime } from '../../../../org/bukkit/entity/Slime.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface SlimeSplitEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Slime;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCount(count: number): void;
    getCount(): number;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class SlimeSplitEvent {
    static get $javaClass(): any;
    constructor(slime: Slime, count: number);
    static getHandlerList(): HandlerList;
}
