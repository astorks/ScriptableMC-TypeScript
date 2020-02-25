declare var Java: any;
import InputStream from '../../../java/io/InputStream.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js'
import PluginLoadOrder from '../../../org/bukkit/plugin/PluginLoadOrder.js'
import Reader from '../../../java/io/Reader.js'
import Writer from '../../../java/io/Writer.js'

export default interface PluginDescriptionFile {
	getAPIVersion(): string;
	getAuthors(): Array<string>;
	getAwareness(): any;
	getClassLoaderOf(): string;
	getCommands(): any;
	getDepend(): Array<string>;
	getDescription(): string;
	getFullName(): string;
	getLoad(): PluginLoadOrder;
	getLoadBefore(): Array<string>;
	getMain(): string;
	getName(): string;
	getPermissionDefault(): PermissionDefault;
	getPermissions(): Array<Permission>;
	getPrefix(): string;
	getRawName(): string;
	getSoftDepend(): Array<string>;
	getVersion(): string;
	getWebsite(): string;
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

