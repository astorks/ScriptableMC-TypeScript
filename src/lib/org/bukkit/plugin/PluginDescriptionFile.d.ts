import InputStream from '../../../java/io/InputStream.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js';
import PluginLoadOrder from '../../../org/bukkit/plugin/PluginLoadOrder.js';
import Reader from '../../../java/io/Reader.js';
import Writer from '../../../java/io/Writer.js';
export default interface PluginDescriptionFile {
    getName(): string;
    getPermissions(): Array<Permission>;
    save(writer: Writer): void;
    getVersion(): string;
    getAuthors(): Array<string>;
    getAwareness(): any;
    getClassLoaderOf(): string;
    getCommands(): any;
    getMain(): string;
    getDepend(): Array<string>;
    getLoadBefore(): Array<string>;
    getPrefix(): string;
    getRawName(): string;
    getLoad(): PluginLoadOrder;
    getWebsite(): string;
    getSoftDepend(): Array<string>;
    getAPIVersion(): string;
    getFullName(): string;
    getDescription(): string;
    getPermissionDefault(): PermissionDefault;
}
export default class PluginDescriptionFile {
    static get $javaClass(): any;
    constructor(reader: Reader);
    constructor(stream: InputStream);
    constructor(pluginName: string, pluginVersion: string, mainClass: string);
}
