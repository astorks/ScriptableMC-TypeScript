import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js';
import PluginLoadOrder from '../../../org/bukkit/plugin/PluginLoadOrder.js';
export default interface PluginDescriptionFile {
    getDescription(): string;
    getFullName(): string;
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
    save(writer: any): void;
}
export default class PluginDescriptionFile {
    static get $javaClass(): any;
    constructor(reader: any);
    constructor(stream: any);
    constructor(pluginName: string, pluginVersion: string, mainClass: string);
}
