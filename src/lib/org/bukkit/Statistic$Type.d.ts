export default interface Statistic$Type {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Statistic$Type {
    static get $javaClass(): any;
    static get UNTYPED(): Statistic$Type;
    static get ITEM(): Statistic$Type;
    static get BLOCK(): Statistic$Type;
    static get ENTITY(): Statistic$Type;
}
