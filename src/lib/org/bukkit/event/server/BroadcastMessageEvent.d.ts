import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface BroadcastMessageEvent extends ServerEvent, Cancellable {
    getMessage(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getRecipients(): any;
    setMessage(message: string): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BroadcastMessageEvent {
    static get $javaClass(): any;
    constructor(isAsync: boolean, message: string, recipients: any);
    constructor(message: string, recipients: any);
    static getHandlerList(): HandlerList;
}
