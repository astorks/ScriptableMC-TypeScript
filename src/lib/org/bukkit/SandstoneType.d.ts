export default interface SandstoneType {
    getData(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class SandstoneType {
    static get $javaClass(): any;
    static get CRACKED(): SandstoneType;
    static get GLYPHED(): SandstoneType;
    static get SMOOTH(): SandstoneType;
}
