export default class CommandPermissions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.permissions.CommandPermissions');
    }
    static registerPermissions(...args) {
        return CommandPermissions.$javaClass.registerPermissions(...args);
    }
}
