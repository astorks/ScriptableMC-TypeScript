export default class MainHand {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.MainHand');
    }
    static get LEFT() {
        return this.$javaClass.LEFT;
    }
    static get RIGHT() {
        return this.$javaClass.RIGHT;
    }
}
