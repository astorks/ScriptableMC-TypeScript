export default class PortalType {
    static get $javaClass() {
        return Java.type('org.bukkit.PortalType');
    }
    static get NETHER() {
        return this.$javaClass.NETHER;
    }
    static get ENDER() {
        return this.$javaClass.ENDER;
    }
    static get CUSTOM() {
        return this.$javaClass.CUSTOM;
    }
}
