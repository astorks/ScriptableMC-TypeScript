export default class DisplaySlot {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.DisplaySlot');
    }
    static get BELOW_NAME() {
        return this.$javaClass.BELOW_NAME;
    }
    static get PLAYER_LIST() {
        return this.$javaClass.PLAYER_LIST;
    }
    static get SIDEBAR() {
        return this.$javaClass.SIDEBAR;
    }
}
