import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface ServerCommandEvent extends ServerEvent, Cancellable {
    getHandlers(): HandlerList;
    getSender(): CommandSender;
    getCommand(): string;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCommand(message: string): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}
