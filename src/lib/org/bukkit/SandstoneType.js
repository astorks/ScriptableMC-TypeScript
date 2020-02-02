export default class SandstoneType {
    static get $javaClass() {
        return Java.type('org.bukkit.SandstoneType');
    }
    static get CRACKED() {
        return this.$javaClass.CRACKED;
    }
    static get GLYPHED() {
        return this.$javaClass.GLYPHED;
    }
    static get SMOOTH() {
        return this.$javaClass.SMOOTH;
    }
}
