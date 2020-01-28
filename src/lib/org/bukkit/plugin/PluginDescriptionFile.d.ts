import { PluginLoadOrder } from '../../../org/bukkit/plugin/PluginLoadOrder.js';
import { PermissionDefault } from '../../../org/bukkit/permissions/PermissionDefault.js';
export interface PluginDescriptionFile {
    getDescription(): string;
    getFullName(): string;
    getVersion(): string;
    getMain(): string;
    getLoad(): PluginLoadOrder;
    getAuthors(): any;
    getWebsite(): string;
    getDepend(): any;
    getSoftDepend(): any;
    getLoadBefore(): any;
    getPrefix(): string;
    getCommands(): any;
    getPermissionDefault(): PermissionDefault;
    getAwareness(): any;
    getAPIVersion(): string;
    getClassLoaderOf(): string;
    getRawName(): string;
    getName(): string;
    getPermissions(): any;
    save(writer: any): void;
}
export declare class PluginDescriptionFile {
    static get $javaClass(): any;
    constructor(reader: any);
    constructor(stream: any);
    constructor(pluginName: string, pluginVersion: string, mainClass: string);
}
