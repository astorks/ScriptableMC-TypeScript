declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {ServicePriority} from '../../../org/bukkit/plugin/ServicePriority.js'

export interface RegisteredServiceProvider {
	getProvider(): any;
	getPlugin(): Plugin;
	getService(): any;
	compareTo(other: RegisteredServiceProvider): number;
	compareTo(arg0: any): number;
	getPriority(): ServicePriority;
}

export class RegisteredServiceProvider {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.RegisteredServiceProvider');
	}
	constructor(service: any, provider: any, priority: ServicePriority, plugin: Plugin);
	constructor(...args: any[]) {
		return new RegisteredServiceProvider.$javaClass(...args);
	}
}

