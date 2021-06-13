declare var Java: any;
import Permission from './Permission.js'
import PermissionAttachment from './PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import ServerOperator from './ServerOperator.js'

export default interface Permissible extends ServerOperator {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	getEffectivePermissions(): any;
	hasPermission(arg0: Permission): boolean;
	hasPermission(arg0: string): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPermissionSet(arg0: string): boolean;
	recalculatePermissions(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	setOp(arg0: boolean): void;
}

export default class Permissible {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permissible');
	}

}

