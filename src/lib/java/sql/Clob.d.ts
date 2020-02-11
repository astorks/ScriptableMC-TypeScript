import InputStream from '../../java/io/InputStream.js';
import OutputStream from '../../java/io/OutputStream.js';
import Reader from '../../java/io/Reader.js';
import Writer from '../../java/io/Writer.js';
export default interface Clob {
    length(): number;
    position(arg0: Clob, arg1: number): number;
    position(arg0: string, arg1: number): number;
    truncate(arg0: number): void;
    free(): void;
    setAsciiStream(arg0: number): OutputStream;
    setCharacterStream(arg0: number): Writer;
    setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
    setString(arg0: number, arg1: string): number;
    getCharacterStream(arg0: number, arg1: number): Reader;
    getCharacterStream(): Reader;
    getAsciiStream(): InputStream;
    getSubString(arg0: number, arg1: number): string;
}
export default class Clob {
    static get $javaClass(): any;
}