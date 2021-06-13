declare var Java: any;
import Plugin from './Plugin.js'
import RegisteredServiceProvider from './RegisteredServiceProvider.js'
import ServicePriority from './ServicePriority.js'

export default interface ServicesManager {
	getKnownServices(): Array<any>;
	getRegistration(arg0: any): RegisteredServiceProvider;
	getRegistrations(arg0: Plugin): Array<any>;
	getRegistrations(arg0: any): Array<any>;
	isProvidedFor(arg0: any): boolean;
	load(arg0: any): any;
	register(arg0: any, arg1: any, arg2: Plugin, arg3: ServicePriority): void;
	unregister(arg0: any): void;
	unregister(arg0: any, arg1: any): void;
	unregisterAll(arg0: Plugin): void;
}

export default class ServicesManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.ServicesManager');
	}

}

