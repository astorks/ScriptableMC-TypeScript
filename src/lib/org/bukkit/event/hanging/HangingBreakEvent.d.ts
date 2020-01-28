import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { HangingBreakEvent$RemoveCause } from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js';
import { Hanging } from '../../../../org/bukkit/entity/Hanging.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { HangingEvent } from '../../../../org/bukkit/event/hanging/HangingEvent.js';
export interface HangingBreakEvent extends HangingEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getCause(): HangingBreakEvent$RemoveCause;
    getEntity(): Hanging;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class HangingBreakEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, cause: HangingBreakEvent$RemoveCause);
    static getHandlerList(): HandlerList;
}
