export default class DragType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.DragType');
    }
    static get SINGLE() {
        return this.$javaClass.SINGLE;
    }
    static get EVEN() {
        return this.$javaClass.EVEN;
    }
}
