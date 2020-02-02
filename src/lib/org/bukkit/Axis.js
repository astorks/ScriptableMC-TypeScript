export default class Axis {
    static get $javaClass() {
        return Java.type('org.bukkit.Axis');
    }
    static get X() {
        return this.$javaClass.X;
    }
    static get Y() {
        return this.$javaClass.Y;
    }
    static get Z() {
        return this.$javaClass.Z;
    }
}
