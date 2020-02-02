export default class PermissionAttachment {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissionAttachment');
    }
    constructor(...args) {
        return new PermissionAttachment.$javaClass(...args);
    }
}
