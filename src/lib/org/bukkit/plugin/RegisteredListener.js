export class RegisteredListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.RegisteredListener');
    }
    constructor(...args) {
        return new RegisteredListener.$javaClass(...args);
    }
}
//# sourceMappingURL=RegisteredListener.js.map