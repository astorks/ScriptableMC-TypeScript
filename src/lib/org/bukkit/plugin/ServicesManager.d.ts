import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js';
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js';
export default interface ServicesManager {
    register(arg0: any, arg1: any, arg2: Plugin, arg3: ServicePriority): void;
    load(arg0: any): any;
    unregister(arg0: any): void;
    unregister(arg0: any, arg1: any): void;
    getRegistration(arg0: any): RegisteredServiceProvider;
    getKnownServices(): any;
    unregisterAll(arg0: Plugin): void;
    isProvidedFor(arg0: any): boolean;
    getRegistrations(arg0: Plugin): Array<any>;
    getRegistrations(arg0: any): any;
}
export default class ServicesManager {
    static get $javaClass(): any;
}
