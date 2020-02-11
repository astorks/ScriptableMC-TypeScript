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
    getDescription(): string;
    getFullName(): string;
    getMain(): string;
    getLoad(): PluginLoadOrder;
    getAuthors(): Array<string>;
    getWebsite(): string;
    getDepend(): Array<string>;
    getLoadBefore(): Array<string>;
    getRawName(): string;
    getAPIVersion(): string;
    getCommands(): any;
    getAwareness(): any;
    getSoftDepend(): Array<string>;
    getClassLoaderOf(): string;
    getPrefix(): string;
    getPermissionDefault(): PermissionDefault;
}
export default class PluginDescriptionFile {
    static get $javaClass(): any;
    constructor(reader: Reader);
    constructor(stream: InputStream);
    constructor(pluginName: string, pluginVersion: string, mainClass: string);
}
