export default class DefaultPermissions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.permissions.DefaultPermissions');
    }
    static registerCorePermissions(...args) {
        return DefaultPermissions.$javaClass.registerCorePermissions(...args);
    }
    static registerPermission(...args) {
        return DefaultPermissions.$javaClass.registerPermission(...args);
    }
}
