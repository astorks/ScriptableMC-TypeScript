import { Hanging } from '../../../../org/bukkit/entity/Hanging.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface HangingEvent extends Event {
    getEntity(): Hanging;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class HangingEvent {
    static get $javaClass(): any;
}
