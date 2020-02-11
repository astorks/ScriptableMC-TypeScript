import HandlerList from '../../../org/bukkit/event/HandlerList.js';
export default interface Event {
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class Event {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
