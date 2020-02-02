export default class PlayerAnimationType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAnimationType');
    }
    static get ARM_SWING() {
        return this.$javaClass.ARM_SWING;
    }
}
