export default interface Comparator$Mode {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Comparator$Mode {
    static get $javaClass(): any;
    static get COMPARE(): Comparator$Mode;
    static get SUBTRACT(): Comparator$Mode;
}
