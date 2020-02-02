import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js';
export default interface ServicesManager {
    register(arg0: any, arg1: any, arg2: Plugin, arg3: ServicePriority): void;
    load(arg0: any): any;
    unregister(arg0: any): void;
    unregister(arg0: any, arg1: any): void;
    getRegistrations(arg0: any): any;
    getRegistrations(arg0: Plugin): any;
    isProvidedFor(arg0: any): boolean;
    getRegistration(arg0: any): RegisteredServiceProvider;
    getKnownServices(): any;
    unregisterAll(arg0: Plugin): void;
}
export default class ServicesManager {
    static get $javaClass(): any;
}
