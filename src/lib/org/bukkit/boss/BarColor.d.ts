export default interface BarColor {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class BarColor {
    static get $javaClass(): any;
    static get PINK(): BarColor;
    static get BLUE(): BarColor;
    static get RED(): BarColor;
    static get GREEN(): BarColor;
    static get YELLOW(): BarColor;
    static get PURPLE(): BarColor;
    static get WHITE(): BarColor;
}
