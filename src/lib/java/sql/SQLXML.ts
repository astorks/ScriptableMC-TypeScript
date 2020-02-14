declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'
import Reader from '../../java/io/Reader.js'
import Writer from '../../java/io/Writer.js'

export default interface SQLXML {
	getSource(arg0: any): any;
	setString(arg0: string): void;
	setBinaryStream(): OutputStream;
	setCharacterStream(): Writer;
	getCharacterStream(): Reader;
	free(): void;
	getBinaryStream(): InputStream;
	getString(): string;
	setResult(arg0: any): any;
}

export default class SQLXML {
	public static get $javaClass(): any {
		return Java.type('java.sql.SQLXML');
	}
}

