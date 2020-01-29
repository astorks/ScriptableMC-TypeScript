import { PermissionDefault } from '../../../org/bukkit/permissions/PermissionDefault.js';
import { PluginLoadOrder } from '../../../org/bukkit/plugin/PluginLoadOrder.js';
export interface PluginDescriptionFile {
    getName(): string;
    getPermissions(): any;
    save(writer: any): void;
    getVersion(): string;
    getDescription(): string;
    getFullName(): string;
    getPermissionDefault(): PermissionDefault;
    getMain(): string;
    getLoad(): PluginLoadOrder;
    getAuthors(): any;
    getWebsite(): string;
    getDepend(): any;
    getSoftDepend(): any;
    getAPIVersion(): string;
    getLoadBefore(): any;
    getCommands(): any;
    getClassLoaderOf(): string;
    getPrefix(): string;
    getAwareness(): any;
    getRawName(): string;
}
export declare class PluginDescriptionFile {
    static get $javaClass(): any;
    constructor(reader: any);
    constructor(stream: any);
    constructor(pluginName: string, pluginVersion: string, mainClass: string);
}
