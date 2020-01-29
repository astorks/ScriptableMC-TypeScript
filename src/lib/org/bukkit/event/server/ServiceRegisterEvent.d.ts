import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { RegisteredServiceProvider } from '../../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import { ServiceEvent } from '../../../../org/bukkit/event/server/ServiceEvent.js';
export interface ServiceRegisterEvent extends ServiceEvent {
    getHandlers(): HandlerList;
    getProvider(): RegisteredServiceProvider;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ServiceRegisterEvent {
    static get $javaClass(): any;
    constructor(registeredProvider: RegisteredServiceProvider);
    static getHandlerList(): HandlerList;
}
