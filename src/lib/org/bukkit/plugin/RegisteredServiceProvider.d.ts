import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { ServicePriority } from '../../../org/bukkit/plugin/ServicePriority.js';
export interface RegisteredServiceProvider {
    getProvider(): any;
    getPlugin(): Plugin;
    getService(): any;
    compareTo(other: RegisteredServiceProvider): number;
    compareTo(arg0: any): number;
    getPriority(): ServicePriority;
}
export declare class RegisteredServiceProvider {
    static get $javaClass(): any;
    constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
}
