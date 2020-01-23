declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {ServicePriority} from '../../../org/bukkit/plugin/ServicePriority.js'
import {RegisteredServiceProvider} from '../../../org/bukkit/plugin/RegisteredServiceProvider.js'

export interface ServicesManager {
	register(service: any, provider: any, plugin: Plugin, priority: ServicePriority): void;
	load(service: any): any;
	unregister(provider: any): void;
	unregister(service: any, provider: any): void;
	unregisterAll(plugin: Plugin): void;
	getRegistration(service: any): RegisteredServiceProvider;
	isProvidedFor(service: any): boolean;
	getRegistrations(plugin: Plugin): any;
	getRegistrations(service: any): any;
	getKnownServices(): any;
}

export class ServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicesManager');
	}
}

