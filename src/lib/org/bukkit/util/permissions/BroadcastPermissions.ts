declare var Java: any;
import Permission from '../../../../org/bukkit/permissions/Permission.js'

export default class BroadcastPermissions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.permissions.BroadcastPermissions');
	}

	public static registerPermissions(parent: Permission): Permission;
	public static registerPermissions(...args: any[]): any {
		return BroadcastPermissions.$javaClass.registerPermissions(...args);
	}

}

