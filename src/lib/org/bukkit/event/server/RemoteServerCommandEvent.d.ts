import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerCommandEvent from '../../../../org/bukkit/event/server/ServerCommandEvent.js';
export default interface RemoteServerCommandEvent extends ServerCommandEvent {
    getHandlers(): HandlerList;
    getSender(): CommandSender;
    getCommand(): string;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCommand(message: string): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class RemoteServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}
