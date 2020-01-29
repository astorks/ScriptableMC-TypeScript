export interface Blob {
    length(): number;
    getBytes(arg0: number, arg1: number): Array<number>;
    position(arg0: Array<number>, arg1: number): number;
    position(arg0: Blob, arg1: number): number;
    truncate(arg0: number): void;
    free(): void;
    setBinaryStream(arg0: number): any;
    setBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: Array<number>): number;
    getBinaryStream(arg0: number, arg1: number): any;
    getBinaryStream(): any;
}
export declare class Blob {
    static get $javaClass(): any;
}
