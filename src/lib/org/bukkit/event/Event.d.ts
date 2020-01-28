import { HandlerList } from '../../../org/bukkit/event/HandlerList.js';
export interface Event {
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class Event {
    static get $javaClass(): any;
    constructor(isAsync: boolean);
    constructor();
}
