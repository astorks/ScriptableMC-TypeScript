export class Team$Option {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Team$Option');
    }
    static get NAME_TAG_VISIBILITY() {
        return this.$javaClass.NAME_TAG_VISIBILITY;
    }
    static get DEATH_MESSAGE_VISIBILITY() {
        return this.$javaClass.DEATH_MESSAGE_VISIBILITY;
    }
    static get COLLISION_RULE() {
        return this.$javaClass.COLLISION_RULE;
    }
}
