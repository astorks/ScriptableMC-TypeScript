import { RegisteredServiceProvider } from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface ServiceEvent extends ServerEvent {
    getProvider(): RegisteredServiceProvider;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ServiceEvent {
    static get $javaClass(): any;
    constructor(provider: RegisteredServiceProvider);
}
