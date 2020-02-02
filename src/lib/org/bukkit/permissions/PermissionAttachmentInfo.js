export default class PermissionAttachmentInfo {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissionAttachmentInfo');
    }
    constructor(...args) {
        return new PermissionAttachmentInfo.$javaClass(...args);
    }
}
