import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js';
import PluginLoadOrder from '../../../org/bukkit/plugin/PluginLoadOrder.js';
export default interface PluginDescriptionFile {
    getName(): string;
    getPermissions(): any;
    save(writer: any): void;
    getVersion(): string;
    getDescription(): string;
    getFullName(): string;
    getPrefix(): string;
    getRawName(): string;
    getLoadBefore(): any;
    getAPIVersion(): string;
    getDepend(): any;
    getMain(): string;
    getAwareness(): any;
    getWebsite(): string;
    getSoftDepend(): any;
    getLoad(): PluginLoadOrder;
    getAuthors(): any;
    getClassLoaderOf(): string;
    getCommands(): any;
    getPermissionDefault(): PermissionDefault;
}
export default class PluginDescriptionFile {
    static get $javaClass(): any;
    constructor(reader: any);
    constructor(stream: any);
    constructor(pluginName: string, pluginVersion: string, mainClass: string);
}
