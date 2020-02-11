import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface ServerCommandEvent extends ServerEvent, Cancellable {
    getCommand(): string;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    setCommand(message: string): void;
    getSender(): CommandSender;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}