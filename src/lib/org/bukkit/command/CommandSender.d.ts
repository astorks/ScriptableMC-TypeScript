import { Server } from '../../../org/bukkit/Server.js';
import { Permission } from '../../../org/bukkit/permissions/Permission.js';
import { PermissionAttachment } from '../../../org/bukkit/permissions/PermissionAttachment.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Permissible } from '../../../org/bukkit/permissions/Permissible.js';
export interface CommandSender extends Permissible {
    getServer(): Server;
    sendMessage(arg0: string): void;
    sendMessage(arg0: Array<string>): void;
    getName(): string;
    hasPermission(arg0: string): boolean;
    hasPermission(arg0: Permission): boolean;
    recalculatePermissions(): void;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    removeAttachment(arg0: PermissionAttachment): void;
    getEffectivePermissions(): any;
    isOp(): boolean;
    setOp(arg0: boolean): void;
}
export declare class CommandSender {
    static get $javaClass(): any;
}
