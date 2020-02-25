declare var Java: any;
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Server from '../../../org/bukkit/Server.js'

export default interface CommandSender extends Permissible {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	getEffectivePermissions(): any;
	getName(): string;
	getServer(): Server;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	recalculatePermissions(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	setOp(arg0: boolean): void;
}

export default class CommandSender {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.command.CommandSender');
	}

}

