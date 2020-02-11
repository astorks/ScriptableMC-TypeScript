import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
export default interface PermissionAttachmentInfo {
    getValue(): boolean;
    getPermission(): string;
    getPermissible(): Permissible;
    getAttachment(): PermissionAttachment;
}
export default class PermissionAttachmentInfo {
    static get $javaClass(): any;
    constructor(permissible: Permissible, permission: string, attachment: PermissionAttachment, value: boolean);
}
