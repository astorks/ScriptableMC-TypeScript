declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {RegisteredServiceProvider} from '../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import {ServicePriority} from '../../../org/bukkit/plugin/ServicePriority.js'

export interface ServicesManager {
	unregisterAll(arg0: Plugin): void;
	unregister(arg0: any, arg1: any): void;
	unregister(arg0: any): void;
	getRegistration(arg0: any): RegisteredServiceProvider;
	getRegistrations(arg0: any): any;
	getRegistrations(arg0: Plugin): any;
	getKnownServices(): any;
	isProvidedFor(arg0: any): boolean;
	register(arg0: any, arg1: any, arg2: Plugin, arg3: ServicePriority): void;
	load(arg0: any): any;
}

export class ServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicesManager');
	}
}

