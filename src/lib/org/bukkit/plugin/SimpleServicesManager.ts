declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js'
import ServicesManager from '../../../org/bukkit/plugin/ServicesManager.js'

export default interface SimpleServicesManager extends ServicesManager {
	getKnownServices(): any;
	getKnownServices(): any;
	getRegistration(service: any): RegisteredServiceProvider;
	unregister(service: any, provider: any): void;
	unregister(provider: any): void;
	unregisterAll(plugin: Plugin): void;
	getRegistrations(service: any): Array<any>;
	getRegistrations(service: any): any;
	getRegistrations(plugin: Plugin): Array<any>;
	isProvidedFor(service: any): boolean;
	register(service: any, provider: any, plugin: Plugin, priority: ServicePriority): void;
	load(service: any): any;
}

export default class SimpleServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.SimpleServicesManager');
	}
	constructor();
	constructor(...args: any[]) {
		return new SimpleServicesManager.$javaClass(...args);
	}
}

