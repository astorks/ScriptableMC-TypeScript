declare var Java: any;
import {HandlerList} from '../../../org/bukkit/event/HandlerList.js'

export interface Event {
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class Event {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event');
	}
	constructor();
	constructor(isAsync: boolean);
	constructor(...args: any[]) {
		return new Event.$javaClass(...args);
	}
}

