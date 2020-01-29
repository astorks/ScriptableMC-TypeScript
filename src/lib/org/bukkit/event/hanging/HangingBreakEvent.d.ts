import { HangingBreakEvent$RemoveCause } from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Hanging } from '../../../../org/bukkit/entity/Hanging.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { HangingEvent } from '../../../../org/bukkit/event/hanging/HangingEvent.js';
export interface HangingBreakEvent extends HangingEvent, Cancellable {
    getCause(): HangingBreakEvent$RemoveCause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntity(): Hanging;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class HangingBreakEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, cause: HangingBreakEvent$RemoveCause);
    static getHandlerList(): HandlerList;
}
