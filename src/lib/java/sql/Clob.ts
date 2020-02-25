declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import OutputStream from '../../java/io/OutputStream.js'
import Reader from '../../java/io/Reader.js'
import Writer from '../../java/io/Writer.js'

export default interface Clob {
	free(): void;
	getAsciiStream(): InputStream;
	getCharacterStream(): Reader;
	getCharacterStream(arg0: number, arg1: number): Reader;
	getSubString(arg0: number, arg1: number): string;
	length(): number;
	position(arg0: Clob, arg1: number): number;
	position(arg0: string, arg1: number): number;
	setAsciiStream(arg0: number): OutputStream;
	setCharacterStream(arg0: number): Writer;
	setString(arg0: number, arg1: string): number;
	setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
	truncate(arg0: number): void;
}

export default class Clob {
	public static get $javaClass(): any {
		return Java.type('java.sql.Clob');
	}

}

