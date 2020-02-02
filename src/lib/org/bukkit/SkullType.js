export default class SkullType {
    static get $javaClass() {
        return Java.type('org.bukkit.SkullType');
    }
    static get SKELETON() {
        return this.$javaClass.SKELETON;
    }
    static get WITHER() {
        return this.$javaClass.WITHER;
    }
    static get ZOMBIE() {
        return this.$javaClass.ZOMBIE;
    }
    static get PLAYER() {
        return this.$javaClass.PLAYER;
    }
    static get CREEPER() {
        return this.$javaClass.CREEPER;
    }
    static get DRAGON() {
        return this.$javaClass.DRAGON;
    }
}
