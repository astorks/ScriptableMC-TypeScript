export default class EquipmentSlot {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.EquipmentSlot');
    }
    static get HAND() {
        return this.$javaClass.HAND;
    }
    static get OFF_HAND() {
        return this.$javaClass.OFF_HAND;
    }
    static get FEET() {
        return this.$javaClass.FEET;
    }
    static get LEGS() {
        return this.$javaClass.LEGS;
    }
    static get CHEST() {
        return this.$javaClass.CHEST;
    }
    static get HEAD() {
        return this.$javaClass.HEAD;
    }
}
