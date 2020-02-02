export default class RaidStopEvent$Reason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidStopEvent$Reason');
    }
    static get PEACE() {
        return this.$javaClass.PEACE;
    }
    static get TIMEOUT() {
        return this.$javaClass.TIMEOUT;
    }
    static get FINISHED() {
        return this.$javaClass.FINISHED;
    }
    static get UNSPAWNABLE() {
        return this.$javaClass.UNSPAWNABLE;
    }
    static get NOT_IN_VILLAGE() {
        return this.$javaClass.NOT_IN_VILLAGE;
    }
}
