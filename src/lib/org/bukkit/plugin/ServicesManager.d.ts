import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { ServicePriority } from '../../../org/bukkit/plugin/ServicePriority.js';
import { RegisteredServiceProvider } from '../../../org/bukkit/plugin/RegisteredServiceProvider.js';
export interface ServicesManager {
    register(arg0: any, arg1: any, arg2: Plugin, arg3: ServicePriority): void;
    load(arg0: any): any;
    unregister(arg0: any, arg1: any): void;
    unregister(arg0: any): void;
    unregisterAll(arg0: Plugin): void;
    getKnownServices(): any;
    getRegistrations(arg0: Plugin): any;
    getRegistrations(arg0: any): any;
    isProvidedFor(arg0: any): boolean;
    getRegistration(arg0: any): RegisteredServiceProvider;
}
export declare class ServicesManager {
    static get $javaClass(): any;
}
