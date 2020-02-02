export default class Mirror {
    static get $javaClass() {
        return Java.type('org.bukkit.block.structure.Mirror');
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get LEFT_RIGHT() {
        return this.$javaClass.LEFT_RIGHT;
    }
    static get FRONT_BACK() {
        return this.$javaClass.FRONT_BACK;
    }
}
