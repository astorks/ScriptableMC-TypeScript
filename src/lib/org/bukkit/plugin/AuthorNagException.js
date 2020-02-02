export default class AuthorNagException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.AuthorNagException');
    }
    constructor(...args) {
        return new AuthorNagException.$javaClass(...args);
    }
}
