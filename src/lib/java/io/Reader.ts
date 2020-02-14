declare var Java: any;
import CharBuffer from '../../java/nio/CharBuffer.js'
import Closeable from '../../java/io/Closeable.js'
import Writer from '../../java/io/Writer.js'

export default interface Reader {
	close(): void;
	mark(readAheadLimit: number): void;
	markSupported(): boolean;
	read(): number;
	read(cbuf: Array<string>): number;
	read(target: CharBuffer): number;
	read(arg0: Array<string>, arg1: number, arg2: number): number;
	ready(): boolean;
	reset(): void;
	skip(n: number): number;
	transferTo(out: Writer): number;
}

export default class Reader {
	public static get $javaClass(): any {
		return Java.type('java.io.Reader');
	}

	public static nullReader(): Reader;
	public static nullReader(...args: any[]): any {
		return Reader.$javaClass.nullReader(...args);
	}

}

