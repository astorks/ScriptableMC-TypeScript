import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js';
import ServicesManager from '../../../org/bukkit/plugin/ServicesManager.js';
export default interface SimpleServicesManager extends ServicesManager {
    unregisterAll(plugin: Plugin): void;
    unregister(service: any, provider: any): void;
    unregister(provider: any): void;
    getKnownServices(): any;
    getKnownServices(): any;
    getRegistration(service: any): RegisteredServiceProvider;
    getRegistrations(service: any): Array<any>;
    getRegistrations(plugin: Plugin): Array<any>;
    getRegistrations(service: any): any;
    isProvidedFor(service: any): boolean;
    register(service: any, provider: any, plugin: Plugin, priority: ServicePriority): void;
    load(service: any): any;
}
export default class SimpleServicesManager {
    static get $javaClass(): any;
    constructor();
}
