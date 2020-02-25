declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js'
import ServicesManager from '../../../org/bukkit/plugin/ServicesManager.js'

export default interface SimpleServicesManager extends ServicesManager {
	getKnownServices(): any;
	getKnownServices(): any;
	getRegistration(service: any): RegisteredServiceProvider;
	getRegistrations(service: any): any;
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

