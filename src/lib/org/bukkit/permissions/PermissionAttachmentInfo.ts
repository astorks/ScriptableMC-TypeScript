declare var Java: any;
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'

export default interface PermissionAttachmentInfo {
	getAttachment(): PermissionAttachment;
	getPermissible(): Permissible;
	getPermission(): string;
	getValue(): boolean;
}

export default class PermissionAttachmentInfo {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.PermissionAttachmentInfo');
	}

	constructor(permissible: Permissible, permission: string, attachment: PermissionAttachment, value: boolean);
	constructor(...args: any[]) {
		return new PermissionAttachmentInfo.$javaClass(...args);
	}

}

