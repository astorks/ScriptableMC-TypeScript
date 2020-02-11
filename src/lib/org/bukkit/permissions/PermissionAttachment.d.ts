import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionRemovedExecutor from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PermissionAttachment {
    remove(): boolean;
    getPermissions(): any;
    setPermission(perm: Permission, value: boolean): void;
    setPermission(_name: string, value: boolean): void;
    getPlugin(): Plugin;
    setRemovalCallback(ex: PermissionRemovedExecutor): void;
    getPermissible(): Permissible;
    getRemovalCallback(): PermissionRemovedExecutor;
    unsetPermission(_name: string): void;
    unsetPermission(perm: Permission): void;
}
export default class PermissionAttachment {
    static get $javaClass(): any;
    constructor(plugin: Plugin, permissible: Permissible);
}
