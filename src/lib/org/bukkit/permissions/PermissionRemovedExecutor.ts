declare var Java: any;
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'

export default interface PermissionRemovedExecutor {
	attachmentRemoved(arg0: PermissionAttachment): void;
}

export default class PermissionRemovedExecutor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionRemovedExecutor');
	}

}

