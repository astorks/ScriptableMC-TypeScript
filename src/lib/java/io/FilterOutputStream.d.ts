import OutputStream from '../../java/io/OutputStream.js';
export default interface FilterOutputStream extends OutputStream {
    write(b: Array<number>, off: number, len: number): void;
    write(b: Array<number>): void;
    write(b: number): void;
    flush(): void;
    close(): void;
}
export default class FilterOutputStream {
    static get $javaClass(): any;
    constructor(out: OutputStream);
    static nullOutputStream(): OutputStream;
}
