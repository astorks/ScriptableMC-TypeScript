import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface BroadcastMessageEvent extends ServerEvent, Cancellable {
    getMessage(): string;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    setMessage(message: string): void;
    getRecipients(): any;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BroadcastMessageEvent {
    static get $javaClass(): any;
    constructor(isAsync: boolean, message: string, recipients: any);
    constructor(message: string, recipients: any);
    static getHandlerList(): HandlerList;
}
