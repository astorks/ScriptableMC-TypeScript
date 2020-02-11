import Clob from '../../java/sql/Clob.js';
import InputStream from '../../java/io/InputStream.js';
import OutputStream from '../../java/io/OutputStream.js';
import Reader from '../../java/io/Reader.js';
import Writer from '../../java/io/Writer.js';
export default interface NClob {
    length(): number;
    position(arg0: string, arg1: number): number;
    position(arg0: Clob, arg1: number): number;
    truncate(arg0: number): void;
    free(): void;
    setString(arg0: number, arg1: string): number;
    setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
    setCharacterStream(arg0: number): Writer;
    setAsciiStream(arg0: number): OutputStream;
    getCharacterStream(arg0: number, arg1: number): Reader;
    getCharacterStream(): Reader;
    getAsciiStream(): InputStream;
    getSubString(arg0: number, arg1: number): string;
}
export default class NClob {
    static get $javaClass(): any;
}
