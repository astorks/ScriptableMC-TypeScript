import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js';
import ServicesManager from '../../../org/bukkit/plugin/ServicesManager.js';
export default interface SimpleServicesManager extends ServicesManager {
    register(service: any, provider: any, plugin: Plugin, priority: ServicePriority): void;
    load(service: any): any;
    unregister(provider: any): void;
    unregister(service: any, provider: any): void;
    getRegistration(service: any): RegisteredServiceProvider;
    getKnownServices(): any;
    getKnownServices(): any;
    unregisterAll(plugin: Plugin): void;
    isProvidedFor(service: any): boolean;
    getRegistrations(service: any): Array<any>;
    getRegistrations(service: any): any;
    getRegistrations(plugin: Plugin): Array<any>;
}
export default class SimpleServicesManager {
    static get $javaClass(): any;
    constructor();
}
