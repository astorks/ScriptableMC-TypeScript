export default class EventPriority {
    static get $javaClass() {
        return Java.type('org.bukkit.event.EventPriority');
    }
    static get LOWEST() {
        return this.$javaClass.LOWEST;
    }
    static get LOW() {
        return this.$javaClass.LOW;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get HIGH() {
        return this.$javaClass.HIGH;
    }
    static get HIGHEST() {
        return this.$javaClass.HIGHEST;
    }
    static get MONITOR() {
        return this.$javaClass.MONITOR;
    }
}
