export default interface EquipmentSlot {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EquipmentSlot {
    static get $javaClass(): any;
    static get HAND(): EquipmentSlot;
    static get OFF_HAND(): EquipmentSlot;
    static get FEET(): EquipmentSlot;
    static get LEGS(): EquipmentSlot;
    static get CHEST(): EquipmentSlot;
    static get HEAD(): EquipmentSlot;
}
