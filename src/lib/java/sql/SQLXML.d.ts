import InputStream from '../../java/io/InputStream.js';
import OutputStream from '../../java/io/OutputStream.js';
import Reader from '../../java/io/Reader.js';
import Writer from '../../java/io/Writer.js';
export default interface SQLXML {
    getString(): string;
    free(): void;
    setResult(arg0: any): any;
    getSource(arg0: any): any;
    setBinaryStream(): OutputStream;
    setCharacterStream(): Writer;
    setString(arg0: string): void;
    getBinaryStream(): InputStream;
    getCharacterStream(): Reader;
}
export default class SQLXML {
    static get $javaClass(): any;
}
