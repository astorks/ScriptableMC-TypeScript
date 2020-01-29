import { PermissionDefault } from '../../../org/bukkit/permissions/PermissionDefault.js';
export interface Permission {
    getName(): string;
    getDefault(): PermissionDefault;
    setDefault(value: PermissionDefault): void;
    getDescription(): string;
    setDescription(value: string): void;
    addParent(perm: Permission, value: boolean): void;
    addParent(_name: string, value: boolean): Permission;
    getPermissibles(): any;
    getChildren(): any;
    recalculatePermissibles(): void;
}
export declare class Permission {
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
    static loadPermissions(data: any, error: string, def: PermissionDefault): any;
    static loadPermission(_name: string, data: any, def: PermissionDefault, output: any): Permission;
    static loadPermission(_name: string, data: any): Permission;
}
