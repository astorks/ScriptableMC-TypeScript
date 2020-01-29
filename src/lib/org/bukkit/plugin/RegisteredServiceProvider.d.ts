import { ServicePriority } from '../../../org/bukkit/plugin/ServicePriority.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface RegisteredServiceProvider {
    compareTo(other: RegisteredServiceProvider): number;
    compareTo(arg0: any): number;
    getPriority(): ServicePriority;
    getProvider(): any;
    getPlugin(): Plugin;
    getService(): any;
}
export declare class RegisteredServiceProvider {
    static get $javaClass(): any;
    constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
}
