import HandlerList from '../../../org/bukkit/event/HandlerList.js';
export default interface Event {
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class Event {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
