import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
export default interface PermissionAttachmentInfo {
    getPermissible(): Permissible;
    getAttachment(): PermissionAttachment;
    getValue(): boolean;
    getPermission(): string;
}
export default class PermissionAttachmentInfo {
    static get $javaClass(): any;
    constructor(permissible: Permissible, permission: string, attachment: PermissionAttachment, value: boolean);
}
