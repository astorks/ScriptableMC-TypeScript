export default class LightningStrikeEvent$Cause {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.LightningStrikeEvent$Cause');
    }
    static get COMMAND() {
        return this.$javaClass.COMMAND;
    }
    static get TRIDENT() {
        return this.$javaClass.TRIDENT;
    }
    static get TRAP() {
        return this.$javaClass.TRAP;
    }
    static get WEATHER() {
        return this.$javaClass.WEATHER;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
