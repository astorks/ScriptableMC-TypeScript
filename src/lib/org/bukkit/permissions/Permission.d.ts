import PermissionDefault from '../../../org/bukkit/permissions/PermissionDefault.js';
export default interface Permission {
    getName(): string;
    getDefault(): PermissionDefault;
    recalculatePermissibles(): void;
    getPermissibles(): any;
    addParent(perm: Permission, value: boolean): void;
    addParent(_name: string, value: boolean): Permission;
    getChildren(): any;
    setDefault(value: PermissionDefault): void;
    getDescription(): string;
    setDescription(value: string): void;
}
export default class Permission {
    static get $javaClass(): any;
    constructor(_name: string, description: string, defaultValue: PermissionDefault);
    constructor(_name: string, description: string, defaultValue: PermissionDefault, children: any);
    constructor(_name: string, description: string, children: any);
    constructor(_name: string, defaultValue: PermissionDefault, children: any);
    constructor(_name: string, children: any);
    constructor(_name: string);
    constructor(_name: string, description: string);
    constructor(_name: string, defaultValue: PermissionDefault);
    static get DEFAULT_PERMISSION(): PermissionDefault;
    static loadPermission(_name: string, data: any, def: PermissionDefault, output: Array<any>): Permission;
    static loadPermission(_name: string, data: any): Permission;
    static loadPermissions(data: any, error: string, def: PermissionDefault): Array<Permission>;
}
