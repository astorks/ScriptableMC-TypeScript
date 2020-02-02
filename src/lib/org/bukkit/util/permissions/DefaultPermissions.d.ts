import Permission from '../../../../org/bukkit/permissions/Permission.js';
import PermissionDefault from '../../../../org/bukkit/permissions/PermissionDefault.js';
export default interface DefaultPermissions {
}
export default class DefaultPermissions {
    static get $javaClass(): any;
    static registerPermission(perm: Permission, parent: Permission): Permission;
    static registerPermission(_name: string, desc: string): Permission;
    static registerPermission(_name: string, desc: string, def: PermissionDefault, children: any): Permission;
    static registerPermission(_name: string, desc: string, def: PermissionDefault): Permission;
    static registerPermission(_name: string, desc: string, def: PermissionDefault, parent: Permission): Permission;
    static registerPermission(_name: string, desc: string, parent: Permission): Permission;
    static registerPermission(_name: string, desc: string, def: PermissionDefault, children: any, parent: Permission): Permission;
    static registerPermission(perm: Permission): Permission;
    static registerPermission(perm: Permission, withLegacy: boolean): Permission;
    static registerCorePermissions(): void;
}
