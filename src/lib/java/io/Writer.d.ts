export default interface Writer {
    append(csq: any, start: number, end: number): Writer;
    append(csq: any, start: number, end: number): any;
    append(c: string): Writer;
    append(c: string): any;
    append(csq: any): any;
    append(csq: any): Writer;
    write(c: number): void;
    write(cbuf: Array<string>): void;
    write(arg0: Array<string>, arg1: number, arg2: number): void;
    write(str: string): void;
    write(str: string, off: number, len: number): void;
    flush(): void;
    close(): void;
}
export default class Writer {
    static get $javaClass(): any;
    static nullWriter(): Writer;
}
