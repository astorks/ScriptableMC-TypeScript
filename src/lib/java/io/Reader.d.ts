import Writer from '../../java/io/Writer.js';
export default interface Reader {
    read(cbuf: Array<string>): number;
    read(arg0: Array<string>, arg1: number, arg2: number): number;
    read(target: any): number;
    read(): number;
    close(): void;
    mark(readAheadLimit: number): void;
    transferTo(out: Writer): number;
    skip(n: number): number;
    markSupported(): boolean;
    reset(): void;
    ready(): boolean;
}
export default class Reader {
    static get $javaClass(): any;
    static nullReader(): Reader;
}
