declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {ServerOperator} from '../../../org/bukkit/permissions/ServerOperator.js'

export interface Permissible extends ServerOperator {
	hasPermission(perm: Permission): boolean;
	hasPermission(_name: string): boolean;
	getEffectivePermissions(): any;
	recalculatePermissions(): void;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(perm: Permission): boolean;
	isPermissionSet(_name: string): boolean;
	isOp(): boolean;
	setOp(value: boolean): void;
}

export class Permissible {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.Permissible');
	}
}

