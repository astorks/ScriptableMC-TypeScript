import InputStream from '../../java/io/InputStream.js';
import OutputStream from '../../java/io/OutputStream.js';
import Reader from '../../java/io/Reader.js';
import Writer from '../../java/io/Writer.js';
export default interface SQLXML {
    free(): void;
    setResult(arg0: any): any;
    getSource(arg0: any): any;
    getString(): string;
    setString(arg0: string): void;
    setCharacterStream(): Writer;
    setBinaryStream(): OutputStream;
    getCharacterStream(): Reader;
    getBinaryStream(): InputStream;
}
export default class SQLXML {
    static get $javaClass(): any;
}
