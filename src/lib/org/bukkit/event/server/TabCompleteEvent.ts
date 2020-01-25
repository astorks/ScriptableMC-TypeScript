declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {CommandSender} from '../../../../org/bukkit/command/CommandSender.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {Event} from '../../../../org/bukkit/event/Event.js'

export interface TabCompleteEvent extends Event, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	getBuffer(): string;
	setCompletions(completions: any): void;
	getCompletions(): any;
	getSender(): CommandSender;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class TabCompleteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.TabCompleteEvent');
	}
	constructor(sender: CommandSender, buffer: string, completions: any);
	constructor(...args: any[]) {
		return new TabCompleteEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return TabCompleteEvent.$javaClass.getHandlerList(...args);
	}
}

