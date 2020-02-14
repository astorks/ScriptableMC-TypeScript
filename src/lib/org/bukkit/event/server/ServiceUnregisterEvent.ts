declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServiceEvent from '../../../../org/bukkit/event/server/ServiceEvent.js'

export default interface ServiceUnregisterEvent extends ServiceEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getProvider(): RegisteredServiceProvider;
	isAsynchronous(): boolean;
}

export default class ServiceUnregisterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServiceUnregisterEvent');
	}

	constructor(serviceProvider: RegisteredServiceProvider);
	constructor(...args: any[]) {
		return new ServiceUnregisterEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ServiceUnregisterEvent.$javaClass.getHandlerList(...args);
	}

}

