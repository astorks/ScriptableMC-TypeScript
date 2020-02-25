declare var Java: any;
import Permission from '../../../../org/bukkit/permissions/Permission.js'
import PermissionDefault from '../../../../org/bukkit/permissions/PermissionDefault.js'

export default class DefaultPermissions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.permissions.DefaultPermissions');
	}

	public static registerCorePermissions(): void;
	public static registerCorePermissions(...args: any[]): any {
		return DefaultPermissions.$javaClass.registerCorePermissions(...args);
	}

	public static registerPermission(perm: Permission): Permission;
	public static registerPermission(perm: Permission, withLegacy: boolean): Permission;
	public static registerPermission(perm: Permission, parent: Permission): Permission;
	public static registerPermission(_name: string, desc: string): Permission;
	public static registerPermission(_name: string, desc: string, def: PermissionDefault): Permission;
	public static registerPermission(_name: string, desc: string, parent: Permission): Permission;
	public static registerPermission(_name: string, desc: string, def: PermissionDefault, parent: Permission): Permission;
	public static registerPermission(_name: string, desc: string, def: PermissionDefault, children: any): Permission;
	public static registerPermission(_name: string, desc: string, def: PermissionDefault, children: any, parent: Permission): Permission;
	public static registerPermission(...args: any[]): any {
		return DefaultPermissions.$javaClass.registerPermission(...args);
	}

}

