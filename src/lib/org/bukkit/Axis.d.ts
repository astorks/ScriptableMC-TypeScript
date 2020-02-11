export default interface Axis {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Axis {
    static get $javaClass(): any;
    static get X(): Axis;
    static get Y(): Axis;
    static get Z(): Axis;
}
