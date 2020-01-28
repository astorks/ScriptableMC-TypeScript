import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { PermissionRemovedExecutor } from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js';
import { Permissible } from '../../../org/bukkit/permissions/Permissible.js';
import { Permission } from '../../../org/bukkit/permissions/Permission.js';
export interface PermissionAttachment {
    getPlugin(): Plugin;
    setRemovalCallback(ex: PermissionRemovedExecutor): void;
    getRemovalCallback(): PermissionRemovedExecutor;
    getPermissible(): Permissible;
    unsetPermission(perm: Permission): void;
    unsetPermission(_name: string): void;
    remove(): boolean;
    getPermissions(): any;
    setPermission(_name: string, value: boolean): void;
    setPermission(perm: Permission, value: boolean): void;
}
export declare class PermissionAttachment {
    static get $javaClass(): any;
    constructor(plugin: Plugin, permissible: Permissible);
}
