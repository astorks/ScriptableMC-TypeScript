import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Server from '../../../org/bukkit/Server.js';
export default interface RemoteConsoleCommandSender extends CommandSender {
    getName(): string;
    getServer(): Server;
    sendMessage(arg0: Array<string>): void;
    sendMessage(arg0: string): void;
    recalculatePermissions(): void;
    getEffectivePermissions(): any;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    isPermissionSet(arg0: Permission): boolean;
    isPermissionSet(arg0: string): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    hasPermission(arg0: Permission): boolean;
    hasPermission(arg0: string): boolean;
    isOp(): boolean;
    setOp(arg0: boolean): void;
}
export default class RemoteConsoleCommandSender {
    static get $javaClass(): any;
}
