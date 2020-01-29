export class Event$Result {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Event$Result');
    }
    static get DENY() {
        return this.$javaClass.DENY;
    }
    static get DEFAULT() {
        return this.$javaClass.DEFAULT;
    }
    static get ALLOW() {
        return this.$javaClass.ALLOW;
    }
}
