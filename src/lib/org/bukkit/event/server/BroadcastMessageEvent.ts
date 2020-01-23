declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface BroadcastMessageEvent extends ServerEvent, Cancellable {
	getMessage(): string;
	getHandlers(): HandlerList;
	setMessage(message: string): void;
	setCancelled(cancelled: boolean): void;
	isCancelled(): boolean;
	getRecipients(): any;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class BroadcastMessageEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.BroadcastMessageEvent');
	}
	constructor(isAsync: boolean, message: string, recipients: any);
	constructor(message: string, recipients: any);
	constructor(...args: any[]) {
		return new BroadcastMessageEvent.$javaClass(...args);
	}
}

