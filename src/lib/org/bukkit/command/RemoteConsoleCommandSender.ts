declare var Java: any;
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Server from '../../../org/bukkit/Server.js'

export default interface RemoteConsoleCommandSender extends CommandSender {
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
	setOp(arg0: boolean): void;
	isOp(): boolean;
}

export default class RemoteConsoleCommandSender {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.RemoteConsoleCommandSender');
	}
}

