declare var Java: any;
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import ServerOperator from '../../../org/bukkit/permissions/ServerOperator.js'

export default interface PermissibleBase extends Permissible {
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	clearPermissions(): void;
	getEffectivePermissions(): any;
	hasPermission(inName: string): boolean;
	hasPermission(perm: Permission): boolean;
	isOp(): boolean;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	recalculatePermissions(): void;
	removeAttachment(attachment: PermissionAttachment): void;
	setOp(value: boolean): void;
}

export default class PermissibleBase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissibleBase');
	}

	constructor(opable: ServerOperator);
	constructor(...args: any[]) {
		return new PermissibleBase.$javaClass(...args);
	}

}

