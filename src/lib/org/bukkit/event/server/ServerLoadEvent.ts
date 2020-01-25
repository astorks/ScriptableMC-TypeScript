declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ServerLoadEvent$LoadType} from '../../../../org/bukkit/event/server/ServerLoadEvent$LoadType.js'
import {ServerEvent} from '../../../../org/bukkit/event/server/ServerEvent.js'

export interface ServerLoadEvent extends ServerEvent {
	getHandlers(): HandlerList;
	getType(): ServerLoadEvent$LoadType;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class ServerLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent');
	}
	constructor(type: ServerLoadEvent$LoadType);
	constructor(...args: any[]) {
		return new ServerLoadEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerLoadEvent.$javaClass.getHandlerList(...args);
	}
}

