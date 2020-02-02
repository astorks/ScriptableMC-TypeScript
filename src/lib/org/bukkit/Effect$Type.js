export default class Effect$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.Effect$Type');
    }
    static get SOUND() {
        return this.$javaClass.SOUND;
    }
    static get VISUAL() {
        return this.$javaClass.VISUAL;
    }
}
