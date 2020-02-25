declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'
import Reader from '../../java/io/Reader.js'
import Writer from '../../java/io/Writer.js'

export default interface SQLXML {
	free(): void;
	getBinaryStream(): InputStream;
	getCharacterStream(): Reader;
	getSource(arg0: any): any;
	getString(): string;
	setBinaryStream(): OutputStream;
	setCharacterStream(): Writer;
	setResult(arg0: any): any;
	setString(arg0: string): void;
}

export default class SQLXML {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLXML');
	}

}

