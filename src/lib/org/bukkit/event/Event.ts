declare var Java: any;
import HandlerList from '../../../org/bukkit/event/HandlerList.js'

export default interface Event {
	getHandlers(): HandlerList;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class Event {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.Event');
	}
	constructor(isAsync: boolean);
	constructor();
	constructor(...args: any[]) {
		return new Event.$javaClass(...args);
	}
}

