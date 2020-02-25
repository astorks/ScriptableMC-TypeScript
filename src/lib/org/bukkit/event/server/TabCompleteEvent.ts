declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface TabCompleteEvent extends Event, Cancellable {
	getBuffer(): string;
	getCompletions(): Array<string>;
	getEventName(): string;
	getHandlers(): HandlerList;
	getSender(): CommandSender;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
	setCompletions(completions: Array<any>): void;
}

export default class TabCompleteEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.TabCompleteEvent');
	}

	constructor(sender: CommandSender, buffer: string, completions: Array<any>);
	constructor(...args: any[]) {
		return new TabCompleteEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return TabCompleteEvent.$javaClass.getHandlerList(...args);
	}

}

