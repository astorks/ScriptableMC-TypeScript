export default interface Parrot$Variant {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Parrot$Variant {
    static get $javaClass(): any;
    static get RED(): Parrot$Variant;
    static get BLUE(): Parrot$Variant;
    static get GREEN(): Parrot$Variant;
    static get CYAN(): Parrot$Variant;
    static get GRAY(): Parrot$Variant;
}
