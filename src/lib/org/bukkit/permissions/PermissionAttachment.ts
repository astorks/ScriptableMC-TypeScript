declare var Java: any;
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionRemovedExecutor from '../../../org/bukkit/permissions/PermissionRemovedExecutor.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface PermissionAttachment {
	getPermissible(): Permissible;
	getPermissions(): any;
	getPlugin(): Plugin;
	getRemovalCallback(): PermissionRemovedExecutor;
	remove(): boolean;
	setPermission(perm: Permission, value: boolean): void;
	setPermission(_name: string, value: boolean): void;
	setRemovalCallback(ex: PermissionRemovedExecutor): void;
	unsetPermission(_name: string): void;
	unsetPermission(perm: Permission): void;
}

export default class PermissionAttachment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionAttachment');
	}

	constructor(plugin: Plugin, permissible: Permissible);
	constructor(...args: any[]) {
		return new PermissionAttachment.$javaClass(...args);
	}

}

