export default class Rotation {
    static get $javaClass() {
        return Java.type('org.bukkit.Rotation');
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get CLOCKWISE_45() {
        return this.$javaClass.CLOCKWISE_45;
    }
    static get CLOCKWISE() {
        return this.$javaClass.CLOCKWISE;
    }
    static get CLOCKWISE_135() {
        return this.$javaClass.CLOCKWISE_135;
    }
    static get FLIPPED() {
        return this.$javaClass.FLIPPED;
    }
    static get FLIPPED_45() {
        return this.$javaClass.FLIPPED_45;
    }
    static get COUNTER_CLOCKWISE() {
        return this.$javaClass.COUNTER_CLOCKWISE;
    }
    static get COUNTER_CLOCKWISE_45() {
        return this.$javaClass.COUNTER_CLOCKWISE_45;
    }
}
