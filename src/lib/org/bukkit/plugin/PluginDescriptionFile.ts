declare var Java: any;
import {PermissionDefault} from '../../../org/bukkit/permissions/PermissionDefault.js'
import {PluginLoadOrder} from '../../../org/bukkit/plugin/PluginLoadOrder.js'

export interface PluginDescriptionFile {
	getName(): string;
	getPermissions(): any;
	save(writer: any): void;
	getVersion(): string;
	getPrefix(): string;
	getFullName(): string;
	getDescription(): string;
	getPermissionDefault(): PermissionDefault;
	getDepend(): any;
	getAPIVersion(): string;
	getClassLoaderOf(): string;
	getSoftDepend(): any;
	getCommands(): any;
	getRawName(): string;
	getAwareness(): any;
	getMain(): string;
	getAuthors(): any;
	getLoad(): PluginLoadOrder;
	getWebsite(): string;
	getLoadBefore(): any;
}

export class PluginDescriptionFile {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginDescriptionFile');
	}
	constructor(reader: any);
	constructor(stream: any);
	constructor(pluginName: string, pluginVersion: string, mainClass: string);
	constructor(...args: any[]) {
		return new PluginDescriptionFile.$javaClass(...args);
	}
}

