export default class StructureRotation {
    static get $javaClass() {
        return Java.type('org.bukkit.block.structure.StructureRotation');
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get CLOCKWISE_90() {
        return this.$javaClass.CLOCKWISE_90;
    }
    static get CLOCKWISE_180() {
        return this.$javaClass.CLOCKWISE_180;
    }
    static get COUNTERCLOCKWISE_90() {
        return this.$javaClass.COUNTERCLOCKWISE_90;
    }
}
