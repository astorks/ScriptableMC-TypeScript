export interface InventoryType$SlotType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class InventoryType$SlotType {
    static get $javaClass(): any;
    static get RESULT(): InventoryType$SlotType;
    static get CRAFTING(): InventoryType$SlotType;
    static get ARMOR(): InventoryType$SlotType;
    static get CONTAINER(): InventoryType$SlotType;
    static get QUICKBAR(): InventoryType$SlotType;
    static get OUTSIDE(): InventoryType$SlotType;
    static get FUEL(): InventoryType$SlotType;
}
