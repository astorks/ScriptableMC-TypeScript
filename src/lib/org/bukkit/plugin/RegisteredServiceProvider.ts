declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import ServicePriority from '../../../org/bukkit/plugin/ServicePriority.js'

export default interface RegisteredServiceProvider {
	compareTo(other: RegisteredServiceProvider): number;
	compareTo(arg0: any): number;
	getPlugin(): Plugin;
	getPriority(): ServicePriority;
	getProvider(): any;
	getService(): any;
}

export default class RegisteredServiceProvider {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredServiceProvider');
	}

	constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
	constructor(...args: any[]) {
		return new RegisteredServiceProvider.$javaClass(...args);
	}

}

