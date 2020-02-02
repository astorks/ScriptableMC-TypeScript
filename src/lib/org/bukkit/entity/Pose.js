export default class Pose {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Pose');
    }
    static get STANDING() {
        return this.$javaClass.STANDING;
    }
    static get FALL_FLYING() {
        return this.$javaClass.FALL_FLYING;
    }
    static get SLEEPING() {
        return this.$javaClass.SLEEPING;
    }
    static get SWIMMING() {
        return this.$javaClass.SWIMMING;
    }
    static get SPIN_ATTACK() {
        return this.$javaClass.SPIN_ATTACK;
    }
    static get SNEAKING() {
        return this.$javaClass.SNEAKING;
    }
    static get DYING() {
        return this.$javaClass.DYING;
    }
}
