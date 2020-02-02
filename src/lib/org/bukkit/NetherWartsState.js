export default class NetherWartsState {
    static get $javaClass() {
        return Java.type('org.bukkit.NetherWartsState');
    }
    static get SEEDED() {
        return this.$javaClass.SEEDED;
    }
    static get STAGE_ONE() {
        return this.$javaClass.STAGE_ONE;
    }
    static get STAGE_TWO() {
        return this.$javaClass.STAGE_TWO;
    }
    static get RIPE() {
        return this.$javaClass.RIPE;
    }
}
