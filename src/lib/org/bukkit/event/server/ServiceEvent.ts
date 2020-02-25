declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js'

export default interface ServiceEvent extends ServerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	isAsynchronous(): boolean;
}

export default class ServiceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceEvent');
	}

	constructor(provider: RegisteredServiceProvider);
	constructor(...args: any[]) {
		return new ServiceEvent.$javaClass(...args);
	}

}

