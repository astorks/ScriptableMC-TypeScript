export default interface ByteProcessor {
    processBytes(arg0: Array<number>, arg1: number, arg2: number): boolean;
    getResult(): any;
}
export default class ByteProcessor {
    static get $javaClass(): any;
}
