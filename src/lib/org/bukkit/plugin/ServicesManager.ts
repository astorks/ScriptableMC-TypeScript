declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import RegisteredServiceProvider from '../../../org/bukkit/plugin/RegisteredServiceProvider.js'
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js'

export default interface ServicesManager {
	getKnownServices(): any;
	getRegistration(arg0: any): RegisteredServiceProvider;
	unregister(arg0: any): void;
	unregister(arg0: any, arg1: any): void;
	unregisterAll(arg0: Plugin): void;
	getRegistrations(arg0: Plugin): Array<any>;
	getRegistrations(arg0: any): any;
	isProvidedFor(arg0: any): boolean;
	register(arg0: any, arg1: any, arg2: Plugin, arg3: ServicePriority): void;
	load(arg0: any): any;
}

export default class ServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicesManager');
	}
}

