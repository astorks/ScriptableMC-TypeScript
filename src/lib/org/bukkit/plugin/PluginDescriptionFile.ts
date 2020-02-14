declare var Java: any;
import InputStream from '../../../java/io/InputStream.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js'
import PluginLoadOrder from '../../../org/bukkit/plugin/PluginLoadOrder.js'
import Reader from '../../../java/io/Reader.js'
import Writer from '../../../java/io/Writer.js'

export default interface PluginDescriptionFile {
	getFullName(): string;
	getDescription(): string;
	getVersion(): string;
	getMain(): string;
	getLoad(): PluginLoadOrder;
	getAuthors(): Array<string>;
	getWebsite(): string;
	getDepend(): Array<string>;
	getSoftDepend(): Array<string>;
	getLoadBefore(): Array<string>;
	getPrefix(): string;
	getCommands(): any;
	getPermissionDefault(): PermissionDefault;
	getAwareness(): any;
	getAPIVersion(): string;
	getClassLoaderOf(): string;
	getRawName(): string;
	getName(): string;
	getPermissions(): Array<Permission>;
	save(writer: Writer): void;
}

export default class PluginDescriptionFile {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginDescriptionFile');
	}
	constructor(reader: Reader);
	constructor(stream: InputStream);
	constructor(pluginName: string, pluginVersion: string, mainClass: string);
	constructor(...args: any[]) {
		return new PluginDescriptionFile.$javaClass(...args);
	}
}

