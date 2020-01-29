export interface SlotIterator$Type {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class SlotIterator$Type {
    static get $javaClass(): any;
    static get HORIZONTAL(): SlotIterator$Type;
    static get VERTICAL(): SlotIterator$Type;
}
