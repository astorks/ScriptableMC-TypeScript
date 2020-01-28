export interface ByteProcessor {
    processBytes(arg0: Array<number>, arg1: number, arg2: number): boolean;
    getResult(): any;
}
export declare class ByteProcessor {
    static get $javaClass(): any;
}
