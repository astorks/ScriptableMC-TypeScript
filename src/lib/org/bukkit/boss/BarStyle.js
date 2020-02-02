export default class BarStyle {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.BarStyle');
    }
    static get SOLID() {
        return this.$javaClass.SOLID;
    }
    static get SEGMENTED_6() {
        return this.$javaClass.SEGMENTED_6;
    }
    static get SEGMENTED_10() {
        return this.$javaClass.SEGMENTED_10;
    }
    static get SEGMENTED_12() {
        return this.$javaClass.SEGMENTED_12;
    }
    static get SEGMENTED_20() {
        return this.$javaClass.SEGMENTED_20;
    }
}
