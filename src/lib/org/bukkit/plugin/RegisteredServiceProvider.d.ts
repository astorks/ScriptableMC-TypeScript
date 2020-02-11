import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js';
export default interface RegisteredServiceProvider {
    compareTo(other: RegisteredServiceProvider): number;
    compareTo(arg0: any): number;
    getPriority(): ServicePriority;
    getProvider(): any;
    getPlugin(): Plugin;
    getService(): any;
}
export default class RegisteredServiceProvider {
    static get $javaClass(): any;
    constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
}
