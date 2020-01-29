import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { CommandSender } from '../../../../org/bukkit/command/CommandSender.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface ServerCommandEvent extends ServerEvent, Cancellable {
    getCommand(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getSender(): CommandSender;
    setCommand(message: string): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}
