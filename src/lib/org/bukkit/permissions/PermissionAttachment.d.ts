import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionRemovedExecutor from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PermissionAttachment {
    getPlugin(): Plugin;
    getPermissible(): Permissible;
    unsetPermission(perm: Permission): void;
    unsetPermission(_name: string): void;
    setRemovalCallback(ex: PermissionRemovedExecutor): void;
    getRemovalCallback(): PermissionRemovedExecutor;
    remove(): boolean;
    getPermissions(): any;
    setPermission(_name: string, value: boolean): void;
    setPermission(perm: Permission, value: boolean): void;
}
export default class PermissionAttachment {
    static get $javaClass(): any;
    constructor(plugin: Plugin, permissible: Permissible);
}
