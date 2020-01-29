import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { CommandSender } from '../../../../org/bukkit/command/CommandSender.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface TabCompleteEvent extends Event, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getBuffer(): string;
    getCompletions(): any;
    getSender(): CommandSender;
    setCompletions(completions: any): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class TabCompleteEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, buffer: string, completions: any);
    static getHandlerList(): HandlerList;
}
