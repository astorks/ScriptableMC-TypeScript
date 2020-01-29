import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface BroadcastMessageEvent extends ServerEvent, Cancellable {
    getMessage(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    setMessage(message: string): void;
    getRecipients(): any;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BroadcastMessageEvent {
    static get $javaClass(): any;
    constructor(isAsync: boolean, message: string, recipients: any);
    constructor(message: string, recipients: any);
    static getHandlerList(): HandlerList;
}
