import { Permission } from '../../../org/bukkit/permissions/Permission.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Permissible } from '../../../org/bukkit/permissions/Permissible.js';
import { PermissionRemovedExecutor } from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js';
export interface PermissionAttachment {
    remove(): boolean;
    getPermissions(): any;
    setPermission(perm: Permission, value: boolean): void;
    setPermission(_name: string, value: boolean): void;
    getPlugin(): Plugin;
    getPermissible(): Permissible;
    setRemovalCallback(ex: PermissionRemovedExecutor): void;
    getRemovalCallback(): PermissionRemovedExecutor;
    unsetPermission(perm: Permission): void;
    unsetPermission(_name: string): void;
}
export declare class PermissionAttachment {
    static get $javaClass(): any;
    constructor(plugin: Plugin, permissible: Permissible);
}
