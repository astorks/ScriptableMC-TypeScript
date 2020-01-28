import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface ServerEvent extends Event {
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ServerEvent {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
