declare var Java: any;
import CachedServerIcon from '../../../../org/bukkit/util/CachedServerIcon.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js'

export default interface ServerListPingEvent extends ServerEvent {
	getHandlers(): HandlerList;
	setMotd(motd: string): void;
	getNumPlayers(): number;
	setMaxPlayers(maxPlayers: number): void;
	setServerIcon(icon: CachedServerIcon): void;
	getMaxPlayers(): number;
	getMotd(): string;
	getAddress(): any;
	iterator(): any;
	getEventName(): string;
	isAsynchronous(): boolean;
	spliterator(): any;
	forEach(arg0: any): void;
}

export default class ServerListPingEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerListPingEvent');
	}
	constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
	constructor(...args: any[]) {
		return new ServerListPingEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServerListPingEvent.$javaClass.getHandlerList(...args);
	}
}

