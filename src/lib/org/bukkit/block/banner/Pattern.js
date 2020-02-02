export default class Pattern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.banner.Pattern');
    }
    constructor(...args) {
        return new Pattern.$javaClass(...args);
    }
}
