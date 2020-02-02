export default interface Slab$Type {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Slab$Type {
    static get $javaClass(): any;
    static get TOP(): Slab$Type;
    static get BOTTOM(): Slab$Type;
    static get DOUBLE(): Slab$Type;
}
