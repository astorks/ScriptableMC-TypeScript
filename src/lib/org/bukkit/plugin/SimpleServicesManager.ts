declare var Java: any;
import Plugin from './Plugin.js'
import RegisteredServiceProvider from './RegisteredServiceProvider.js'
import ServicePriority from './ServicePriority.js'
import ServicesManager from './ServicesManager.js'

export default interface SimpleServicesManager extends ServicesManager {
	getKnownServices(): any;
	getKnownServices(): Array<any>;
	getRegistration(service: any): RegisteredServiceProvider;
	getRegistrations(service: any): Array<any>;
	getRegistrations(service: any): Array<any>;
	getRegistrations(plugin: Plugin): Array<any>;
	isProvidedFor(service: any): boolean;
	load(service: any): any;
	register(service: any, provider: any, plugin: Plugin, priority: ServicePriority): void;
	unregister(provider: any): void;
	unregister(service: any, provider: any): void;
	unregisterAll(plugin: Plugin): void;
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

