declare var Java: any;
import Closeable from '../../java/io/Closeable.js'

export default interface InputStream {
	read(arg0: Array<number>, arg1: number, arg2: number): number;
	read(arg0: Array<number>): number;
	read(): number;
	close(): void;
	mark(arg0: number): void;
	skip(arg0: number): number;
	available(): number;
	markSupported(): boolean;
	reset(): void;
}

export default class InputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.InputStream');
	}
	constructor();
	constructor(...args: any[]) {
		return new InputStream.$javaClass(...args);
	}
}

