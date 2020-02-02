export default interface Bed$Part {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Bed$Part {
    static get $javaClass(): any;
    static get HEAD(): Bed$Part;
    static get FOOT(): Bed$Part;
}
