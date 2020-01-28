import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { HangingBreakEvent$RemoveCause } from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js';
import { Hanging } from '../../../../org/bukkit/entity/Hanging.js';
import { HangingBreakEvent } from '../../../../org/bukkit/event/hanging/HangingBreakEvent.js';
export interface HangingBreakByEntityEvent extends HangingBreakEvent {
    getRemover(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getCause(): HangingBreakEvent$RemoveCause;
    getEntity(): Hanging;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class HangingBreakByEntityEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
    constructor(hanging: Hanging, remover: Entity);
    static getHandlerList(): HandlerList;
}
