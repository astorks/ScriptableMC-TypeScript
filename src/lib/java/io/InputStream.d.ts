import OutputStream from '../../java/io/OutputStream.js';
export default interface InputStream {
    read(b: Array<number>, off: number, len: number): number;
    read(b: Array<number>): number;
    read(): number;
    close(): void;
    mark(readlimit: number): void;
    readAllBytes(): Array<number>;
    readNBytes(b: Array<number>, off: number, len: number): number;
    readNBytes(len: number): Array<number>;
    transferTo(out: OutputStream): number;
    skip(n: number): number;
    available(): number;
    markSupported(): boolean;
    reset(): void;
}
export default class InputStream {
    static get $javaClass(): any;
    constructor();
    static nullInputStream(): InputStream;
}
