export default interface NumberConversions {
}
export default class NumberConversions {
    static get $javaClass(): any;
    static isFinite(f: number): boolean;
    static isFinite(d: number): boolean;
    static ceil(num: number): number;
    static floor(num: number): number;
    static round(num: number): number;
    static square(num: number): number;
    static checkFinite(d: number, message: string): void;
    static checkFinite(d: number, message: string): void;
    static toDouble(object: any): number;
    static toShort(object: any): number;
    static toByte(object: any): number;
    static toLong(object: any): number;
    static toFloat(object: any): number;
    static toInt(object: any): number;
}
