export default class PlayerFishEvent$State {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerFishEvent$State');
    }
    static get FISHING() {
        return this.$javaClass.FISHING;
    }
    static get CAUGHT_FISH() {
        return this.$javaClass.CAUGHT_FISH;
    }
    static get CAUGHT_ENTITY() {
        return this.$javaClass.CAUGHT_ENTITY;
    }
    static get IN_GROUND() {
        return this.$javaClass.IN_GROUND;
    }
    static get FAILED_ATTEMPT() {
        return this.$javaClass.FAILED_ATTEMPT;
    }
    static get REEL_IN() {
        return this.$javaClass.REEL_IN;
    }
    static get BITE() {
        return this.$javaClass.BITE;
    }
}
