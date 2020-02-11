import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface TabCompleteEvent extends Event, Cancellable {
    getBuffer(): string;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getSender(): CommandSender;
    setCompletions(completions: Array<any>): void;
    getCompletions(): Array<string>;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class TabCompleteEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, buffer: string, completions: Array<any>);
    static getHandlerList(): HandlerList;
}
