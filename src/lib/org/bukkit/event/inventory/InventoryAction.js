export class InventoryAction {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryAction');
    }
    static get NOTHING() {
        return this.$javaClass.NOTHING;
    }
    static get PICKUP_ALL() {
        return this.$javaClass.PICKUP_ALL;
    }
    static get PICKUP_SOME() {
        return this.$javaClass.PICKUP_SOME;
    }
    static get PICKUP_HALF() {
        return this.$javaClass.PICKUP_HALF;
    }
    static get PICKUP_ONE() {
        return this.$javaClass.PICKUP_ONE;
    }
    static get PLACE_ALL() {
        return this.$javaClass.PLACE_ALL;
    }
    static get PLACE_SOME() {
        return this.$javaClass.PLACE_SOME;
    }
    static get PLACE_ONE() {
        return this.$javaClass.PLACE_ONE;
    }
    static get SWAP_WITH_CURSOR() {
        return this.$javaClass.SWAP_WITH_CURSOR;
    }
    static get DROP_ALL_CURSOR() {
        return this.$javaClass.DROP_ALL_CURSOR;
    }
    static get DROP_ONE_CURSOR() {
        return this.$javaClass.DROP_ONE_CURSOR;
    }
    static get DROP_ALL_SLOT() {
        return this.$javaClass.DROP_ALL_SLOT;
    }
    static get DROP_ONE_SLOT() {
        return this.$javaClass.DROP_ONE_SLOT;
    }
    static get MOVE_TO_OTHER_INVENTORY() {
        return this.$javaClass.MOVE_TO_OTHER_INVENTORY;
    }
    static get HOTBAR_MOVE_AND_READD() {
        return this.$javaClass.HOTBAR_MOVE_AND_READD;
    }
    static get HOTBAR_SWAP() {
        return this.$javaClass.HOTBAR_SWAP;
    }
    static get CLONE_STACK() {
        return this.$javaClass.CLONE_STACK;
    }
    static get COLLECT_TO_CURSOR() {
        return this.$javaClass.COLLECT_TO_CURSOR;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
//# sourceMappingURL=InventoryAction.js.map