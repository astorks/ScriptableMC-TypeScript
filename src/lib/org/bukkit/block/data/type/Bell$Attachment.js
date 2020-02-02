export default class Bell$Attachment {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Bell$Attachment');
    }
    static get FLOOR() {
        return this.$javaClass.FLOOR;
    }
    static get CEILING() {
        return this.$javaClass.CEILING;
    }
    static get SINGLE_WALL() {
        return this.$javaClass.SINGLE_WALL;
    }
    static get DOUBLE_WALL() {
        return this.$javaClass.DOUBLE_WALL;
    }
}
