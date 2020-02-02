import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import ServerOperator from '../../../org/bukkit/permissions/ServerOperator.js';
export default interface Permissible extends ServerOperator {
    hasPermission(arg0: string): boolean;
    hasPermission(arg0: Permission): boolean;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    recalculatePermissions(): void;
    getEffectivePermissions(): any;
    isOp(): boolean;
    setOp(arg0: boolean): void;
}
export default class Permissible {
    static get $javaClass(): any;
}
