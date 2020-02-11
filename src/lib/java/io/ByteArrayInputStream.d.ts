import InputStream from '../../java/io/InputStream.js';
import OutputStream from '../../java/io/OutputStream.js';
export default interface ByteArrayInputStream extends InputStream {
    read(b: Array<number>, off: number, len: number): number;
    read(): number;
    close(): void;
    mark(readAheadLimit: number): void;
    readAllBytes(): Array<number>;
    readNBytes(b: Array<number>, off: number, len: number): number;
    transferTo(out: OutputStream): number;
    skip(n: number): number;
    available(): number;
    markSupported(): boolean;
    reset(): void;
    read(b: Array<number>): number;
    readNBytes(len: number): Array<number>;
}
export default class ByteArrayInputStream {
    static get $javaClass(): any;
    constructor(buf: Array<number>);
    constructor(buf: Array<number>, offset: number, length: number);
    static nullInputStream(): InputStream;
}
