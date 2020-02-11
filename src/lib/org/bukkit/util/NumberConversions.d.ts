export default interface NumberConversions {
}
export default class NumberConversions {
    static get $javaClass(): any;
    static isFinite(d: number): boolean;
    static isFinite(f: number): boolean;
    static ceil(num: number): number;
    static floor(num: number): number;
    static round(num: number): number;
    static toInt(object: any): number;
    static toDouble(object: any): number;
    static toLong(object: any): number;
    static square(num: number): number;
    static toFloat(object: any): number;
    static checkFinite(d: number, message: string): void;
    static checkFinite(d: number, message: string): void;
    static toShort(object: any): number;
    static toByte(object: any): number;
}
