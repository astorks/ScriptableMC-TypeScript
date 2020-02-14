declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js'

export default interface BroadcastMessageEvent extends ServerEvent, Cancellable {
	isCancelled(): boolean;
	getHandlers(): HandlerList;
	setCancelled(cancelled: boolean): void;
	setMessage(message: string): void;
	getRecipients(): any;
	getMessage(): string;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class BroadcastMessageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.BroadcastMessageEvent');
	}
	constructor(message: string, recipients: any);
	constructor(isAsync: boolean, message: string, recipients: any);
	constructor(...args: any[]) {
		return new BroadcastMessageEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BroadcastMessageEvent.$javaClass.getHandlerList(...args);
	}
}

