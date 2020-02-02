import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js';
import ServicesManager from '../../../org/bukkit/plugin/ServicesManager.js';
export default interface SimpleServicesManager extends ServicesManager {
    register(service: any, provider: any, plugin: Plugin, priority: ServicePriority): void;
    load(service: any): any;
    unregister(provider: any): void;
    unregister(service: any, provider: any): void;
    getRegistrations(plugin: Plugin): any;
    getRegistrations(service: any): any;
    getRegistrations(service: any): any;
    isProvidedFor(service: any): boolean;
    getRegistration(service: any): RegisteredServiceProvider;
    getKnownServices(): any;
    getKnownServices(): any;
    unregisterAll(plugin: Plugin): void;
}
export default class SimpleServicesManager {
    static get $javaClass(): any;
    constructor();
}
