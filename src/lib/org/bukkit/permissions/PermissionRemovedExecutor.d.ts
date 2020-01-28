import { PermissionAttachment } from '../../../org/bukkit/permissions/PermissionAttachment.js';
export interface PermissionRemovedExecutor {
    attachmentRemoved(arg0: PermissionAttachment): void;
}
export declare class PermissionRemovedExecutor {
    static get $javaClass(): any;
}
