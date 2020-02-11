import OutputStream from '../../java/io/OutputStream.js';
export default interface ByteArrayOutputStream extends OutputStream {
    size(): number;
    write(b: number): void;
    write(b: Array<number>, off: number, len: number): void;
    close(): void;
    toByteArray(): Array<number>;
    reset(): void;
    writeBytes(b: Array<number>): void;
    writeTo(out: OutputStream): void;
    write(b: Array<number>): void;
    flush(): void;
}
export default class ByteArrayOutputStream {
    static get $javaClass(): any;
    constructor();
    constructor(size: number);
    static nullOutputStream(): OutputStream;
}
