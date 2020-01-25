declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerCommandEvent extends ServerEvent, Cancellable {
	getHandlers(): HandlerList;
	getCommand(): string;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setCommand(message: string): void;
	getSender(): CommandSender;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ServerCommandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerCommandEvent');
	}
	constructor(sender: CommandSender, command: string);
	constructor(...args: any[]) {
		return new ServerCommandEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerCommandEvent.$javaClass.getHandlerList(...args);
	}
}

