import { HandlerList } from '../../../org/bukkit/event/HandlerList.js';
export interface Event {
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class Event {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
