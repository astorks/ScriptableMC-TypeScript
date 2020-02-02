export default class PermissibleBase {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissibleBase');
    }
    constructor(...args) {
        return new PermissibleBase.$javaClass(...args);
    }
}
