export default class GameMode {
    static get $javaClass() {
        return Java.type('org.bukkit.GameMode');
    }
    static get CREATIVE() {
        return this.$javaClass.CREATIVE;
    }
    static get SURVIVAL() {
        return this.$javaClass.SURVIVAL;
    }
    static get ADVENTURE() {
        return this.$javaClass.ADVENTURE;
    }
    static get SPECTATOR() {
        return this.$javaClass.SPECTATOR;
    }
}
