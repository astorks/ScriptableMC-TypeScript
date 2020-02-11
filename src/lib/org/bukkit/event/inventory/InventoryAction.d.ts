export default interface InventoryAction {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class InventoryAction {
    static get $javaClass(): any;
    static get NOTHING(): InventoryAction;
    static get PICKUP_ALL(): InventoryAction;
    static get PICKUP_SOME(): InventoryAction;
    static get PICKUP_HALF(): InventoryAction;
    static get PICKUP_ONE(): InventoryAction;
    static get PLACE_ALL(): InventoryAction;
    static get PLACE_SOME(): InventoryAction;
    static get PLACE_ONE(): InventoryAction;
    static get SWAP_WITH_CURSOR(): InventoryAction;
    static get DROP_ALL_CURSOR(): InventoryAction;
    static get DROP_ONE_CURSOR(): InventoryAction;
    static get DROP_ALL_SLOT(): InventoryAction;
    static get DROP_ONE_SLOT(): InventoryAction;
    static get MOVE_TO_OTHER_INVENTORY(): InventoryAction;
    static get HOTBAR_MOVE_AND_READD(): InventoryAction;
    static get HOTBAR_SWAP(): InventoryAction;
    static get CLONE_STACK(): InventoryAction;
    static get COLLECT_TO_CURSOR(): InventoryAction;
    static get UNKNOWN(): InventoryAction;
}
