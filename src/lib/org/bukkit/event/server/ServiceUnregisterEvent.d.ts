import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServiceEvent from '../../../../org/bukkit/event/server/ServiceEvent.js';
export default interface ServiceUnregisterEvent extends ServiceEvent {
    getHandlers(): HandlerList;
    getProvider(): RegisteredServiceProvider;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ServiceUnregisterEvent {
    static get $javaClass(): any;
    constructor(serviceProvider: RegisteredServiceProvider);
    static getHandlerList(): HandlerList;
}
