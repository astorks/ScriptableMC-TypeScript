export default class CoalType {
    static get $javaClass() {
        return Java.type('org.bukkit.CoalType');
    }
    static get COAL() {
        return this.$javaClass.COAL;
    }
    static get CHARCOAL() {
        return this.$javaClass.CHARCOAL;
    }
}
