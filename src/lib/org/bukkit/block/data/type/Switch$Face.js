export default class Switch$Face {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Switch$Face');
    }
    static get FLOOR() {
        return this.$javaClass.FLOOR;
    }
    static get WALL() {
        return this.$javaClass.WALL;
    }
    static get CEILING() {
        return this.$javaClass.CEILING;
    }
}
