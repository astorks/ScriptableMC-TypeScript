export default class NameTagVisibility {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.NameTagVisibility');
    }
    static get ALWAYS() {
        return this.$javaClass.ALWAYS;
    }
    static get NEVER() {
        return this.$javaClass.NEVER;
    }
    static get HIDE_FOR_OTHER_TEAMS() {
        return this.$javaClass.HIDE_FOR_OTHER_TEAMS;
    }
    static get HIDE_FOR_OWN_TEAM() {
        return this.$javaClass.HIDE_FOR_OWN_TEAM;
    }
}
