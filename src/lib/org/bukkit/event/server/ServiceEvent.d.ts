import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import RegisteredServiceProvider from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface ServiceEvent extends ServerEvent {
    getProvider(): RegisteredServiceProvider;
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class ServiceEvent {
    static get $javaClass(): any;
    constructor(provider: RegisteredServiceProvider);
}
