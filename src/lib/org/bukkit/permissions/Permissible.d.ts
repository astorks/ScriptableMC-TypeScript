import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import ServerOperator from '../../../org/bukkit/permissions/ServerOperator.js';
export default interface Permissible extends ServerOperator {
    getEffectivePermissions(): any;
    recalculatePermissions(): void;
    hasPermission(arg0: Permission): boolean;
    hasPermission(arg0: string): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    isOp(): boolean;
    setOp(arg0: boolean): void;
}
export default class Permissible {
    static get $javaClass(): any;
}
