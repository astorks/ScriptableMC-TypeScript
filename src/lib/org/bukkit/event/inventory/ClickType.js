export class ClickType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.ClickType');
    }
    static get LEFT() {
        return this.$javaClass.LEFT;
    }
    static get SHIFT_LEFT() {
        return this.$javaClass.SHIFT_LEFT;
    }
    static get RIGHT() {
        return this.$javaClass.RIGHT;
    }
    static get SHIFT_RIGHT() {
        return this.$javaClass.SHIFT_RIGHT;
    }
    static get WINDOW_BORDER_LEFT() {
        return this.$javaClass.WINDOW_BORDER_LEFT;
    }
    static get WINDOW_BORDER_RIGHT() {
        return this.$javaClass.WINDOW_BORDER_RIGHT;
    }
    static get MIDDLE() {
        return this.$javaClass.MIDDLE;
    }
    static get NUMBER_KEY() {
        return this.$javaClass.NUMBER_KEY;
    }
    static get DOUBLE_CLICK() {
        return this.$javaClass.DOUBLE_CLICK;
    }
    static get DROP() {
        return this.$javaClass.DROP;
    }
    static get CONTROL_DROP() {
        return this.$javaClass.CONTROL_DROP;
    }
    static get CREATIVE() {
        return this.$javaClass.CREATIVE;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
