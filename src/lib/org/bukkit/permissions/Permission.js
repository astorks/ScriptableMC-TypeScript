export default class Permission {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.Permission');
    }
    constructor(...args) {
        return new Permission.$javaClass(...args);
    }
    static get DEFAULT_PERMISSION() {
        return Permission.$javaClass.DEFAULT_PERMISSION;
    }
    static loadPermission(...args) {
        return Permission.$javaClass.loadPermission(...args);
    }
    static loadPermissions(...args) {
        return Permission.$javaClass.loadPermissions(...args);
    }
}
