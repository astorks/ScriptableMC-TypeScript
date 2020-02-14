declare var Java: any;
import CharBuffer from '../../java/nio/CharBuffer.js'
import Closeable from '../../java/io/Closeable.js'

export default interface Reader {
	read(arg0: Array<string>): number;
	read(arg0: Array<string>, arg1: number, arg2: number): number;
	read(): number;
	read(arg0: CharBuffer): number;
	close(): void;
	mark(arg0: number): void;
	skip(arg0: number): number;
	markSupported(): boolean;
	reset(): void;
	ready(): boolean;
}

export default class Reader {
	public static get $javaClass(): any {
		return Java.type('java.io.Reader');
	}
}

