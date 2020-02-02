import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import ServerOperator from '../../../org/bukkit/permissions/ServerOperator.js';
export default interface PermissibleBase extends Permissible {
    isOp(): boolean;
    setOp(value: boolean): void;
    hasPermission(perm: Permission): boolean;
    hasPermission(inName: string): boolean;
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
    addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
    addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
    isPermissionSet(_name: string): boolean;
    isPermissionSet(perm: Permission): boolean;
    removeAttachment(attachment: PermissionAttachment): void;
    recalculatePermissions(): void;
    getEffectivePermissions(): any;
    clearPermissions(): void;
}
export default class PermissibleBase {
    static get $javaClass(): any;
    constructor(opable: ServerOperator);
}
