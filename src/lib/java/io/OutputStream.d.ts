export default interface OutputStream {
    write(b: Array<number>, off: number, len: number): void;
    write(b: Array<number>): void;
    write(arg0: number): void;
    flush(): void;
    close(): void;
}
export default class OutputStream {
    static get $javaClass(): any;
    constructor();
    static nullOutputStream(): OutputStream;
}
