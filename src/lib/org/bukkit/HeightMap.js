export default class HeightMap {
    static get $javaClass() {
        return Java.type('org.bukkit.HeightMap');
    }
    static get MOTION_BLOCKING() {
        return this.$javaClass.MOTION_BLOCKING;
    }
    static get MOTION_BLOCKING_NO_LEAVES() {
        return this.$javaClass.MOTION_BLOCKING_NO_LEAVES;
    }
    static get OCEAN_FLOOR() {
        return this.$javaClass.OCEAN_FLOOR;
    }
    static get OCEAN_FLOOR_WG() {
        return this.$javaClass.OCEAN_FLOOR_WG;
    }
    static get WORLD_SURFACE() {
        return this.$javaClass.WORLD_SURFACE;
    }
    static get WORLD_SURFACE_WG() {
        return this.$javaClass.WORLD_SURFACE_WG;
    }
}
