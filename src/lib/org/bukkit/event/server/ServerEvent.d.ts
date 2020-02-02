import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface ServerEvent extends Event {
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ServerEvent {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
