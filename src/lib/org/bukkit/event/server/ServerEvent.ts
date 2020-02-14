declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface ServerEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
}

export default class ServerEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerEvent');
	}

	constructor();
	constructor(isAsync: boolean);
	constructor(...args: any[]) {
		return new ServerEvent.$javaClass(...args);
	}

}

