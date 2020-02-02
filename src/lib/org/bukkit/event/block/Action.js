export default class Action {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.Action');
    }
    static get LEFT_CLICK_BLOCK() {
        return this.$javaClass.LEFT_CLICK_BLOCK;
    }
    static get RIGHT_CLICK_BLOCK() {
        return this.$javaClass.RIGHT_CLICK_BLOCK;
    }
    static get LEFT_CLICK_AIR() {
        return this.$javaClass.LEFT_CLICK_AIR;
    }
    static get RIGHT_CLICK_AIR() {
        return this.$javaClass.RIGHT_CLICK_AIR;
    }
    static get PHYSICAL() {
        return this.$javaClass.PHYSICAL;
    }
}
