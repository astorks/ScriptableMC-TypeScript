export default interface ItemFlag {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class ItemFlag {
    static get $javaClass(): any;
    static get HIDE_ENCHANTS(): ItemFlag;
    static get HIDE_ATTRIBUTES(): ItemFlag;
    static get HIDE_UNBREAKABLE(): ItemFlag;
    static get HIDE_DESTROYS(): ItemFlag;
    static get HIDE_PLACED_ON(): ItemFlag;
    static get HIDE_POTION_EFFECTS(): ItemFlag;
}
