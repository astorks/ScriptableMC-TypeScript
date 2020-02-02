export default class World$Environment {
    static get $javaClass() {
        return Java.type('org.bukkit.World$Environment');
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get NETHER() {
        return this.$javaClass.NETHER;
    }
    static get THE_END() {
        return this.$javaClass.THE_END;
    }
}
