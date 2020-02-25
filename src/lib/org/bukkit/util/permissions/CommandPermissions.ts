declare var Java: any;
import Permission from '../../../../org/bukkit/permissions/Permission.js'

export default class CommandPermissions {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.permissions.CommandPermissions');
	}

	public static registerPermissions(parent: Permission): Permission;
	public static registerPermissions(...args: any[]): any {
		return CommandPermissions.$javaClass.registerPermissions(...args);
	}

}

